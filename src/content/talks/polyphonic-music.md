---
title: "Variational Autoencoders for Polyphonic Music Interpolation"
pageTitle: "Polyphonic Music Generation | Pablo"
subtitle: "Master's Thesis Research · NTHU AI Lab · 2020 – 2022"
type: "Publication"
date: "Mar 2022"
timestamp: "2022-03"
description: "My Master's Thesis research, conducted while working as a Research Scientist at the National Tsing Hua University AI Lab. This work introduced a novel VAE architecture for music generation and resulted in two publications to international journals and conferences."
links:
  - text: "Read Journal Paper (JISE 2022)"
    url: "https://jise.iis.sinica.edu.tw/JISESearch/fullText;jsessionid=ae47212eac032c3804c2227d540f?pId=2488&code=34C89A9F403A58A"
    badge: "Full Text ↗"
  - text: "Read Conference Paper (IEEE TAAI 2020)"
    url: "https://ieeexplore.ieee.org/document/9382444"
    badge: "IEEE Xplore ↗"
  - text: "View Source Code (GitHub)"
    url: "https://github.com/pablomp3/ML-interpolation-Master-Thesis"
    badge: "Repository ↗"
artifacts:
  - heading: "Conference Presentation (TAAI 2020)"
    src: "/assets/talks/polyphonic-music/visionandsound.png"
    alt: "Presenting at TAAI 2020"
slides:
  heading: "Presentation Slides"
  src: "/assets/talks/polyphonic-music/TAAI_Variational_Autoencoders.pdf"
---

## The Problem

If you want an algorithm to create a smooth musical transition between two different songs (Piece A to Piece B), the naive mathematical approach is linear interpolation: draw a straight line between the data points of both pieces and sample points along that line.

With simple single-note melodies, that sometimes sounds acceptable. But with polyphonic music—where multiple notes, chords, and basslines happen at the same time—a straight mathematical average fails completely. It produces clashing notes, out-of-scale intervals, and broken rhythms that sound like random keyboard mashing rather than music.

## The Approach & Architecture

At the National Tsing Hua University AI Lab, I designed a system that teaches a generative model to navigate music in a way that respects music theory:

- **Variational Autoencoder (VAE):** The model compresses bars of symbolic MIDI music down into a compact continuous space (the latent space) that captures harmonic and structural features.
- **Latent Trajectory Estimator:** Instead of drawing a naive straight line between two points in this latent space, I trained a secondary neural network to predict a realistic path between the starting and ending bars.
- **Decoder Reconstruction:** The decoder unpacks the points along this path back into polyphonic MIDI, ensuring intermediate bars follow valid chord progressions and rhythmic timing.

## Outcome & What I Learned

The model produced musical transitions that kept rhythmic pulse and harmonic coherence, avoiding the harsh clashing notes produced by standard linear methods. The project led to two peer-reviewed publications:

- **Journal Paper (2022):** Published in the *Journal of Information Science and Engineering (JISE)*.
- **Conference Paper (2020):** Presented at the *International Conference on Technologies and Applications of Artificial Intelligence (TAAI)*.

**Key Takeaway:** High-dimensional latent spaces in generative models are curved and uneven. Assuming you can simply walk in a straight line between two concepts rarely works—you have to design constraints that reflect the physical or theoretical rules of your actual domain.
