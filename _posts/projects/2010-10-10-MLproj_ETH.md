---
layout: page
title: Machine Learning Competition ETH
subtitle: 
---

<p align="right">
<br>You can access the <a href="https://github.com/ymentha14/ML_competitionETH18"> github repo </a><br></p>

<p class="used_tools">Key tools: python, sklearn, keras</p>

## Introduction
As part of the Bachelor Machine Learning course at ETH, we participated in a competition using the various techniques seen during the course. This competition consisted of 2 training datasets both having 139 features: a labelled one with 21000 entries and an unlabelled one with 9000 entries.The label was a discrete variable taking 10 distinct values (0-9) 
The goal consisted in predicting the label of a test set of 9000 entries with the highest accuracy possible. Three baselines were defined (easy, middle hard)

## Implementation
As this was obviously a semi-supervised problem, the method which gave the best results turned out to be [pseudo-labelling](https://www.analyticsvidhya.com/blog/2017/09/pseudo-labelling-semi-supervised-learning-technique/) coupled with early <strong> stopping, batch normalization,PCA preprocessing and dropout.</strong> A bagging method was tried as well, but this did not give any result.

## Results
We obtained a final accuracy of 89.771% on a 5-Fold cross-validation and 88.883% on the provided test set. This made us pass the hard baseline, and contributed to my final grade of 6/6 over the whole course.

## Retrospective Improvements
A lot of time was spent changing minor settings: it would have been interesting to implement the network in pytorch rather than using keras, and passing from one architecture to the other with less training.
