---
title: "AutoML: Evolving Neural Networks"
pageTitle: "AutoML: Evolving Neural Networks | Pablo"
subtitle: "Internal Tech Talk · Titansoft TechDays 2021"
type: "Talk"
date: "Oct 2021"
timestamp: "2021-10"
description: "An internal talk given at Titansoft's TechDays covering automated machine learning pipelines and network evolution."
slides:
  heading: "Presentation Slides"
  src: "/assets/talks/automl/Evolving_Neural_Networks.pdf"
---

## The Problem

Designing a neural network usually involves a lot of manual guesswork. Why 3 hidden layers instead of 5? Why 128 neurons instead of 256? Why ReLU instead of GELU?

Data scientists spend days running trial-and-error experiments, changing one hyperparameter at a time, and often settling for whatever baseline works reasonably well without knowing if a better topology exists.

## The Approach & Architecture

For Titansoft's internal TechDays 2021, I walked our engineering teams through Automated Machine Learning (AutoML) using evolutionary algorithms—letting biological principles discover network architectures:

- **Networks as Genomes:** Each model architecture (number of layers, node counts, connection paths, and activations) is encoded as a set of genetic parameters.
- **Fitness Evaluation:** A population of candidate models trains on the problem dataset. Each model's validation performance serves as its biological fitness score.
- **Selection, Crossover & Mutation:** The top-performing architectures survive and "breed" intermediate candidates, with random mutations introducing structural changes (such as adding skip connections or changing filter sizes) over successive generations.

## Outcome & What I Learned

The presentation helped our data science and engineering groups evaluate how and when to incorporate automated architecture search into production workflows.

**Key Takeaway:** Evolutionary algorithms are simple to conceptualize and naturally parallel, but brute-force searches can easily burn through cloud budgets. In real-world engineering, the winning approach is hybrid: use engineering intuition to define strict architectural boundaries first, then use evolution to fine-tune the interior hyperparameters.
