---
title: "Variational Autoencoders for Polyphonic Music Interpolation"
pageTitle: "Polyphonic Music Generation | Pablo"
type: "Publication"
date: "2022/03"
timestamp: "2022-03"
description: "Research on using variational autoencoders to create transitions between pieces of polyphonic music."
links:
  - text: "Journal paper (JISE 2022)"
    url: "https://www.researchgate.net/publication/417260443_VAENN_Interpolation_Composition_by_Direct_Estimation_of_Encoded_Vectors_Against_Linear_Sampling_of_Latent_Space"
    badge: "Full Text ↗"
  - text: "Conference paper (IEEE TAAI 2020)"
    url: "https://www.researchgate.net/publication/350330641_Variational_Autoencoders_for_Polyphonic_Music_Interpolation"
    badge: "ResearchGate ↗"
  - text: "Master's thesis"
    url: "https://www.researchgate.net/publication/417260439_Variational_Autoencoders_for_Polyphonic_Music_Interpolation"
    badge: "ResearchGate ↗"
  - text: "Source code (GitHub)"
    url: "https://github.com/pablomp3/ML-interpolation-Master-Thesis"
    badge: "Repository ↗"
slides:
  heading: "Presentation Slides"
  src: "/assets/talks/polyphonic-music/TAAI_Variational_Autoencoders.pdf"
---


## What is music interpolation?

In traditional music generation, the model generates music based on past events. But what if we could use both past and future events? The goal is to generate a middle track that connects a given beginning and ending.

We input a begin track and an end track of 10 seconds each, and the model generates a middle track of 10 seconds. We can then compare the generated track with the original middle track from the human composition.

<img src="https://raw.githubusercontent.com/pablomp3/ML-interpolation-Master-Thesis/master/images/interpolation_definition.jpg" alt="Diagram showing a generated middle track between a beginning and an ending" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 1.5rem 0;" />

The tracks are polyphonic, meaning that several notes can play at the same time. They are represented as MIDI, which describes notes symbolically instead of using a recorded audio waveform.

<img src="https://raw.githubusercontent.com/pablomp3/ML-interpolation-Master-Thesis/master/images/mono_vs_polyphonic.jpg" alt="Monophonic music has one note at a time, while polyphonic music can have several" loading="lazy" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 1.5rem 0;" />

Each timestep is represented as a vector of 64 binary elements, one for each pitch: 1 means the note is on, and 0 means it is off.

<img src="https://raw.githubusercontent.com/pablomp3/ML-interpolation-Master-Thesis/master/images/polyphonic_modelling.jpg" alt="A piano keyboard and a binary vector showing how active notes are represented" loading="lazy" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 1.5rem 0;" />

## Dataset and approach

I created the *Hsinchu Interpolation MIDI Dataset*, based on the Lakh MIDI Dataset. It contains 30,830 segments of 30 seconds each, selected to include segments where the beginning and ending tracks are different.

I tested four approaches: random data, a bidirectional LSTM, a variational autoencoder (VAE), and a VAE combined with a neural network (VAE+NN). The VAE approach encodes the beginning and ending tracks into vectors, averages those vectors, and decodes the result to produce the interpolation track.

The VAE+NN approach replaces the averaging step with a neural network that estimates the interpolation vector:

1. Encode the begin track and end track with the VAE to obtain `z_begin` and `z_end`.
2. Use a neural network to estimate `z_interpolation` from those two vectors.
3. Decode `z_interpolation` to obtain the polyphonic interpolation track.

<img src="https://raw.githubusercontent.com/pablomp3/ML-interpolation-Master-Thesis/master/images/VAE%2BNN_architecture.jpg" alt="Architecture of the VAE and neural network used to estimate the middle track" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 1.5rem 0;" />

## Results

I evaluated the models using mean squared error (MSE) against the original human-composed middle tracks. In these experiments, VAE+NN achieved lower reconstruction error than the VAE with linear interpolation. This measures similarity to the reference track; it does not by itself tell us how the music sounds.

<img src="https://raw.githubusercontent.com/pablomp3/ML-interpolation-Master-Thesis/master/images/MSE_average.jpg" alt="Average mean squared error of the evaluated models" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 1.5rem 0;" />

### More objective results

The table below compares track MSE at different binarization thresholds. The threshold determines whether a predicted note is treated as on or off.

<img src="https://raw.githubusercontent.com/pablomp3/ML-interpolation-Master-Thesis/master/images/MSE_by_threshold.jpg" alt="Track MSE for Bi-LSTM, VAE, and VAE+NN across binarization thresholds" loading="lazy" style="width: 100%; max-width: 680px; border-radius: 8px; margin: 1.5rem 0;" />

The next table compares MSE in the latent space for the two VAE approaches.

<img src="https://raw.githubusercontent.com/pablomp3/ML-interpolation-Master-Thesis/master/images/MSE_latent_space.jpg" alt="Latent-space MSE comparison for VAE and VAE plus neural network" loading="lazy" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 1.5rem 0;" />

### Listening study

I also conducted a listening study with 32 people from eight countries. In the total votes shown below, VAE+NN received 52 votes, compared with 44 for VAE; human compositions received 66.

<img src="https://raw.githubusercontent.com/pablomp3/ML-interpolation-Master-Thesis/master/images/subjective_evaluation_total.jpg" alt="Listening study total votes: Bi-LSTM 22, VAE 44, VAE+NN 52, human 66" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 1.5rem 0;" />

This research resulted in a conference paper at IEEE TAAI 2020 and a journal paper in JISE in 2022. The papers, thesis, code, and presentation slides are linked above.

<img src="/assets/talks/polyphonic-music/visionandsound.png" alt="Presenting at TAAI 2020" style="width: 100%; max-width: 600px; border-radius: 8px; margin: 2rem 0;" />
