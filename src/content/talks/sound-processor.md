---
title: "Sound Processor for Electric Guitar"
pageTitle: "Sound Processor for Electric Guitar | Pablo"
subtitle: "Bachelor's Thesis · University of Oviedo · Electronics & Audio DSP"
type: "Publication"
date: "Jul 2018"
timestamp: "2018-07"
description: "A publication based on my Bachelor's Thesis in Industrial Electronics and Automation Engineering, detailing the design and implementation of a Programmable Digital Effects Pedal."
links:
  - text: "Read Thesis Publication (ResearchGate)"
    url: "https://www.researchgate.net/publication/343163713_Sound_Processor_for_Electric_Guitar"
    badge: "Full Monograph ↗"
  - text: "Watch Live Demo Video (YouTube)"
    url: "https://www.youtube.com/watch?v=_gIwaO_1uJA"
    badge: "Video ↗"
artifacts:
  - heading: "DSP Hardware PCB (Top View)"
    src: "/assets/talks/sound-processor/electric_guitar_pedal.jpeg"
    alt: "DSP PCB Hardware (top)"
  - heading: "DSP Hardware PCB (Bottom View)"
    src: "/assets/talks/sound-processor/pcb_texas.jpg"
    alt: "DSP PCB Hardware (bottom)"
  - heading: "Circuit Schematic"
    src: "/assets/talks/sound-processor/electric_guitar_pedal_schematic.png"
    alt: "Circuit Schematic"
---

## The Problem

Traditional guitar pedals are fixed analog circuits: one box does only distortion, another does only delay, and another does only chorus. If you want a different sound, you have to buy another box or solder a new circuit.

Commercial digital multi-effect units exist, but they are closed black boxes. You cannot inspect the signal chain, write your own DSP algorithms, or reprogram how the hardware processes audio.

## The Approach & Architecture

For my Bachelor's Thesis in Industrial Electronics and Automation Engineering, I designed and fabricated an open, programmable digital effects pedal from the ground up:

- **Analog Front-End:** An input buffer stage with high input impedance to preserve instrument tone from magnetic guitar pickups, paired with an active anti-aliasing filter.
- **DSP Hardware:** A Texas Instruments digital signal processor chip paired with high-fidelity analog-to-digital (ADC) and digital-to-analog (DAC) converters for real-time audio computation.
- **DSP Algorithms (C & Assembly):** Wrote real-time audio routines including circular-buffer delay lines, modulation effects (chorus/flanger), tone filters, and non-linear distortion curves.
- **Custom PCB:** Designed, routed, and soldered a dedicated double-sided circuit board with power management, bypass footswitches, and analog potentiometer controls.

## Outcome & What I Learned

The finished pedal achieved ultra-low latency real-time guitar processing without audible digital lag, proven in live video demonstrations. The project was published on ResearchGate as an engineering thesis monograph.

**Key Takeaway:** Mixing delicate microvolt analog guitar signals with high-frequency digital clock lines is brutal. If power decoupling and ground plane separation are even slightly off, high-frequency digital switching noise bleeds right into the audio path. This project was my foundational education in real-world hardware-software co-design.
