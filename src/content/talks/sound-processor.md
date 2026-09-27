---
title: "Sound Processor for Electric Guitar"
pageTitle: "Sound Processor for Electric Guitar | Pablo"
type: "Publication"
date: "Jul 2018"
timestamp: "2018-07"
description: "Design and fabrication of an open, programmable digital effects pedal for electric guitar, featuring ultra-low latency real-time DSP."
links:
  - text: "Read Thesis Publication (ResearchGate)"
    url: "https://www.researchgate.net/publication/343163713_Sound_Processor_for_Electric_Guitar"
    badge: "Full Monograph ↗"
  - text: "Watch Live Demo Video (YouTube)"
    url: "https://www.youtube.com/watch?v=_gIwaO_1uJA"
    badge: "Video ↗"
---

## The Problem

The music scene has always been reluctant to change. In recent history, the digital revolution has taken this aversion to digital systems in general and digital pedals in particular. 

In general, digital effects pedals are expensive and standardized; they offer a minimum level of customization. Besides, when compared to analog, especially in the live-music scene, digital pedals are assumed to have a poorer performance. 

## The Approach & Architecture

In order to put aside these preconceptions about digital systems and prove their advantages, a programmable digital effects pedal for electric guitar was created as a market alternative to the existing devices. The idea of creating a single device capable of emulating a variety of effects came up.

The process involved several stages of hardware-software co-design:

**Component Selection & PCB Design:** 
A detailed study was performed to select the adequate components, including standard 9V power delivery, an audio codec for ADC/DAC conversion, and high-quality I/O jacks and potentiometers. A custom printed circuit board was designed using a Texas Instruments DSP card (TMS320F28335) as the "brain" to connect all I/O components and manage real-time audio processing.

<img src="/assets/talks/sound-processor/electric_guitar_pedal_schematic.png" alt="Circuit Schematic" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 1.5rem 0;" />

**PCB Soldering:** 
The components were manually soldered onto the manufactured board to ensure solid connections and avoid digital switching noise bleeding into the audio path.

<img src="/assets/talks/sound-processor/pcb_texas.jpg" alt="DSP PCB Hardware (bottom)" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 1.5rem 0;" />

**Software Integration & Enclosure:** 
I loaded the Matlab code from a partner's software project, which included the DSP algorithms and impulse response emulator for different effects like delay, chorus, and distortion. Finally, I 3D printed a custom case to safely hold the PCB, the footswitches, the display, and all I/O hardware together.

<img src="/assets/talks/sound-processor/electric_guitar_pedal.jpeg" alt="DSP PCB Hardware (top)" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 1.5rem 0;" />

## Outcome & What I Learned

The work presented aims to provide the foundations of the design of digital effects pedals, both from a technical and economical point of view. A digital pedal was successfully designed and manufactured, as the continuation of a broader project.
