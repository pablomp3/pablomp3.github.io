---
title: "The Voice Memo Graveyard: Building a Second Brain for Musicians with Python"
pageTitle: "The Voice Memo Graveyard | Pablo"
subtitle: "Conference Presentation · PyCon Taiwan 2026"
type: "Talk"
date: "Sep 2026"
timestamp: "2026-09"
description: "My presentation at PyCon Taiwan 2026 covering keep-audio.xyz, a project exploring audio hardware, DSP, and music tech using Python."
links:
  - text: "PyCon Taiwan 2026 Talk Details"
    url: "https://tw.pycon.org/2026/en-us/conference/talk/394"
    badge: "Official Schedule ↗"
  - text: "Project Website (keep-audio.xyz)"
    url: "https://keep-audio.xyz"
    badge: "Live App ↗"
---

## The Problem

Almost every musician has a phone filled with hundreds of voice memos titled *"New Recording 74"*, *"Riff in E"*, or *"Melody draft"*.

They quickly become a digital graveyard. When you are writing a song months later and want to retrieve that chord idea you hummed on the street, scrubbing through dozens of 15-second audio files manually is frustrating and kills creative momentum.

## The Approach & Architecture

To fix this for my own music, I built **keep-audio.xyz**—a searchable audio second-brain built around a Python audio pipeline:

- **Audio Ingestion:** Accepts quick audio uploads from phones and field recorders without requiring manual tagging or form-filling up front.
- **DSP & Feature Extraction:** Uses Python signal processing libraries to extract musical fingerprints—including tempo (BPM), estimated musical key, pitch tracking, and harmonic chroma features.
- **Smart Indexing:** Groups and searches recordings by musical similarity, so you can find ideas based on how they actually sound (e.g., *"mid-tempo riff in D major"*) rather than when they were recorded.

## Outcome & What I Learned

I deployed the project live at **keep-audio.xyz** and presented the architecture at **PyCon Taiwan 2026**, demonstrating how Python's scientific ecosystem can solve practical creator problems.

**Key Takeaway:** With creative tools, friction is fatal. If an app asks a songwriter to type tags, add genres, or wait ten seconds while inspiration is fresh, they will close it and use the default voice memo app instead. The system has to do the heavy lifting automatically behind the scenes.
