---
title: "AutoML: Evolving Neural Networks"
pageTitle: "AutoML: Evolving Neural Networks | Pablo"
type: "Talk"
date: "2021/10"
timestamp: "2021-10"
description: "A 2021 introduction to neural architecture search, and why better data can matter more than automated model design."
slides:
  heading: "Presentation Slides"
  src: "/assets/talks/automl/Evolving_Neural_Networks.pdf"
---

## Why this talk?

In 2021, I gave a talk at Titansoft's TechDays about AutoML and neural architecture search (NAS): how can we automate the design of neural networks, and what are the practical limitations?

## The idea

NAS is a technique for automating the design of neural networks:

- Designing architectures by hand is hard.
- NAS can find good architecture designs automatically.
- However, NAS algorithms can be extremely expensive to run, especially when they train many candidate networks.

The paper [Neural Architecture Search without Training](https://proceedings.mlr.press/v139/mellor21a.html) (Mellor et al., ICML 2021) explores a cheaper way to identify promising networks:

1. Randomly sample candidate architectures from a search space.
2. Pass a batch of data through each untrained network and compare its activation patterns across the examples.
3. Use those patterns to score each architecture and select the highest-scoring one.

The score is a proxy for how well a network might perform after training; the selected network still needs to be trained and evaluated for the task.

## My takeaway

AutoML is interesting, but it doesn't make the hard parts of machine learning disappear. Data collection, cleaning, labeling, and feature work still matter—and an automated search doesn't guarantee a better model than a thoughtfully designed baseline. For an industry team, improving the data may be a better place to spend the next hour.

## Presentation slides

<iframe src="/assets/talks/automl/Evolving_Neural_Networks.pdf" title="Evolving Neural Networks presentation slides" loading="lazy" style="width: 100%; max-width: 780px; height: 600px; border: 1px solid var(--border-color); margin: 1.5rem 0;">
  <a href="/assets/talks/automl/Evolving_Neural_Networks.pdf">Open the presentation slides</a>
</iframe>
