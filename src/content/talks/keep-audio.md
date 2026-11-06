---
title: "The Voice Memo Graveyard: Building a Second Brain for Musicians with Python"
pageTitle: "The Voice Memo Graveyard | Pablo"
type: "Talk"
date: "Sep 2026"
timestamp: "2026-09"
description: "I recorded 54 voice memos in two years and finished one song. So I built a Python rules engine to match my musical ideas, on a single free VM with FastAPI, SQLite and local Whisper."
links:
  - text: "PyCon Taiwan 2026 Talk Details"
    url: "https://tw.pycon.org/2026/en-us/conference/talk/394"
    badge: "Official Schedule ↗"
  - text: "Project Website (keep-audio.xyz)"
    url: "https://keep-audio.xyz"
    badge: "Live App ↗"
slides:
  heading: "Presentation Slides"
  src: "/assets/talks/keep-audio/presentation_slides.pdf"
---

<img src="/assets/talks/keep-audio/cover.png" alt="The Voice Memo Graveyard - PyCon TW 2026" style="width: 100%; max-width: 720px; border-radius: 8px; margin: 1.5rem 0; border: 1px solid var(--border-color);" />

Over the past two years, I recorded 54 voice and guitar memos but finished only one song. I wanted to go back to those ideas (but I rarely did), so I built [keep-audio.xyz](https://keep-audio.xyz) to help me turn those amateur songwriter ideas into full songs.

Last week I talked about this experience at PyCon Taiwan, and oh boy, sharing it was fun!

What was not that fun was realizing that this SaaS was dead from the very beginning, and even my friends who make music weren't interested in using it. The target audience is too small and too niche, or the features aren't compelling enough. Unlike Spotify, where anybody _could_ listen to a song, how many people are actually making them?

Still, I wanted to see if it could help me with my own songwriting.

## 1. The voice memo graveyard

The chord progressions, riffs, and melodies that I had recorded on my phone were mostly dead. So I thought: "Can I use Python to organize my ideas better and to move forward in the creative workflow?"

I didn't know exactly what to build, so I defined my anti-goals first:

<img src="/assets/talks/keep-audio/slide_07_anti_goals.png" alt="Anti-goals: What I didn't want vs What I wanted" style="width: 100%; max-width: 720px; border-radius: 8px; margin: 1.5rem 0; border: 1px solid var(--border-color);" />

## 2. What to build

Cool, but how are the pros making _good_ songs? I defined a promising combination of ideas as a **Song Seed**, for example:

1. a riff (think the _Seven Nation Army_ intro)

   <audio controls preload="none" aria-label="Seven Nation Army riff"><source src="/assets/talks/keep-audio/seven-nation-army.mp3" type="audio/mpeg" />Your browser does not support audio playback.</audio>

2. a melody (either verse or chorus, think _Shape of You_)

   <audio controls preload="none" aria-label="Shape of You melody"><source src="/assets/talks/keep-audio/shape-of-you.mp3" type="audio/mpeg" />Your browser does not support audio playback.</audio>

3. lyrics (think The Smiths)

   <audio controls preload="none" aria-label="The Smiths, Cemetry Gates excerpt"><source src="/assets/talks/keep-audio/cemetry-gates.mp3" type="audio/mpeg" />Your browser does not support audio playback.</audio>

   <div style="text-align: center; font-style: italic; line-height: 1.8; margin: 1.5rem auto; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; max-width: 480px;">
   So we go inside and we gravely read the stones<br />
   All those people, all those lives<br />
   Where are they now?<br />
   With loves and hates<br />
   And passions just like mine<br />
   They were born<br />
   And then they lived<br />
   And then they died<br />
   Seems so unfair<br />
   I want to cry<br />
   <span style="display: block; margin-top: 0.75rem; font-style: normal;">— Morrissey, “Cemetry Gates”</span>
   </div>

Each of those components is an idea that users record on their phones after having a burst of creativity, then they just:

1. Upload each idea (recording) to the website.
2. Add tags to the idea (guitar/piano/voice, high/low energy, quick/slow, etc).
3. Click "find matches" and the system groups their ideas together!

## 3. Python rules to match my ideas to each other

What kind of magic makes 2 ideas "go together"? Can I just set a reward system for certain behaviors among ideas? Kinda:

<img src="/assets/talks/keep-audio/slide_13_reward_intuition.png" alt="Translating Musical Intuition into Code: Reward and Penalty Matrix" style="width: 100%; max-width: 720px; border-radius: 8px; margin: 1.5rem 0; border: 1px solid var(--border-color);" />

I wanted to match more than 2 ideas, but checking every possible combination quickly becomes expensive (combinatorial explosion problem). Like in classic recommendation systems, I used two stages:

1. **Stage 1 is fast candidate pairing:** the system looks for ideas to complement the recording I picked, rewarding different roles and instruments, or a shared mood.
2. **Stage 2 evaluates that entire group as a potential song**, considering things like energy, key, and language.

<img src="/assets/talks/keep-audio/slide_15_two_stage_matching.png" alt="Deterministic Scoring: Stage 1 Fast Candidate Pairing and Stage 2 Seed Validation" style="width: 100%; max-width: 720px; border-radius: 8px; margin: 1.5rem 0; border: 1px solid var(--border-color);" />

## 4. You can't argue with black boxes

A core idea was rejecting a black box telling me which ideas go together. Python rules give me deterministic behavior and explainability for free, and that's what I wanted as a user:

<img src="/assets/talks/keep-audio/slide_16_matching_rationale.png" alt="Explainability and No-Black-Box: Match Rationale and Confidence Breakdown" style="width: 100%; max-width: 720px; border-radius: 8px; margin: 1.5rem 0; border: 1px solid var(--border-color);" />

## 5. Architecture and local ML inference for speech-to-text

How to run this without keeping my laptop on 24/7? I hosted Keep-audio on a free 4 vCPU, 24GB memory Oracle Cloud VM running Caddy, FastAPI, SQLite, and a local ML model: Whisper (a ~140MB open-weights model developed by OpenAI that can transcribe a song in just a few seconds).

<img src="/assets/talks/keep-audio/slide_21_architecture.png" alt="Keep-audio architecture: browser, Caddy, FastAPI, SQLite, local Whisper and audio storage on a single VM" style="width: 100%; max-width: 720px; border-radius: 8px; margin: 1.5rem 0; border: 1px solid var(--border-color);" />

## 6. What to take back to your own project

Presenting at PyCon for the first time was exciting, and I wanted to share my opinionated views on building software products (especially for solo devs like myself):

1. **[Domain] Try rules before complex ML models.** You get deterministic behavior and explainability for free (good for users).
2. **[Engineering] Stick to a simple architecture until it breaks.** A single VM with FastAPI and SQLite can take you shockingly far.
3. **[Mindset] Define your anti-goals early.** Decide what you won't build, and leave the enjoyable parts of the craft to humans.


To finalize, I'll answer the million-dollar question: has Keep-audio helped me finish more songs? Not really (yet), as I only just built it. For now, allow me some more time to play around with it and make one or two hits.
