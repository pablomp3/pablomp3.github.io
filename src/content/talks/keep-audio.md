---
title: "The Voice Memo Graveyard: Building a Second Brain for Musicians with Python"
pageTitle: "The Voice Memo Graveyard | Pablo"
type: "Talk"
date: "Sep 2026"
timestamp: "2026-09"
description: "A searchable audio second-brain for musicians built on FastAPI, SQLite, and local Whisper, featuring deterministic matching for musical ideas."
links:
  - text: "PyCon Taiwan 2026 Talk Details"
    url: "https://tw.pycon.org/2026/en-us/conference/talk/394"
    badge: "Official Schedule ↗"
  - text: "Project Website (keep-audio.xyz)"
    url: "https://keep-audio.xyz"
    badge: "Live App ↗"
---

## The Problem

Every musician has a phone full of voice memos — riffs, lyric ideas, rough melodies that rarely become finished songs. They become a voice memo graveyard.

## The Approach & Architecture

Keep Audio XYZ uses Python to help musicians organize and reconnect their own ideas, not generate new ones. This project is a lightweight second brain for songwriters built on **FastAPI, SQLite, and local Whisper**.

The system follows a musical idea through the full system lifecycle:
- **Audio upload** and local Whisper transcription.
- **User-driven metadata tagging** and domain modeling (Idea → SongSeed → Song).
- **Deterministic matching engine** and song-seed generation.

I deliberately chose a single FastAPI + SQLite monolith running on an Oracle Cloud VM over distributed infrastructure during the MVP stage. I also found that explainable deterministic similarity beats embeddings when your domain has explicit structure, so I built deterministic scoring with explicit Python logic that works by modeling musical constraints, providing more predictable behavior.

## Outcome & What I Learned

Building this exposed several engineering tradeoffs. I learned what breaks when CPU-bound ML inference runs inside async web frameworks. Specifically, I navigated Pythonic deployment gotchas like how `async def` inadvertently blocks uvicorn workers during ML inference (and how to fix it), plus navigating Python 3.8 vs 3.12+ type-hinting mismatches when moving from local development to cloud VMs.

The project is live at **keep-audio.xyz** and these real implementation tradeoffs were presented at PyCon TW 2026.
