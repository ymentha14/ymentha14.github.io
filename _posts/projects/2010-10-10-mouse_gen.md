---
layout: page
title: Network for Mouse Genetics
subtitle: 
---
Wikipedia describes the phenotype as _the composite of the organism's observable characteristics or traits. (...) An organism's phenotype results from two basic factors: the expression of an organism's genetic code, or its genotype, and the influence of environmental factors. Both factors may interact, further affecting phenotype._  In fact, both the genetic and its expression rates depending on the environmental factors give useful informations in order to predict a phenotype have their advantages and inconvenients.


* The genetic information on one hand can be systematically sequenced and analyzed for any individual. However, most of the DNA is silenced in most cells through epigenetic phenomenon such as chromatin condensation (link) leading to a lot of noisy and useless information in the genetic data.
* On the other hand, protein expression levels are closer to the phenotype in that sense that the phenotype will directly depend of these. However, many techniques exist to quantify the concentration of any protein level, and these levels can vary according to many factors, or not be measured at all, leading to sparse dataset.
Our approach consisted thus in trying to find a network-based technique which would be able to take advantage of the best of these 2 datasets.
As a first step, we built a genetic-similarity based graph for the different mouse strains. Based on this graph, I developed a grid-search approach evaluating different combinations of gene/parameters in order to obtain a list of genes on which we would have chances to perform decently despite the of missing data and gene complexity.
The main gene we decided to focus on was the hair coat color: in order to predict it, we used subsequently the following methods:
* Logistic regression
* Tikhonov classification
* Harmonic classification
* Graph Neural Network
* Recursive Feature selection (RFE)
  <br>
These methods, along with the RFE allowed me to reach an accuracy of 98% : after further investigation, it turned out that the SNP we were working on coincided perfectly with the hair color-responsible genes. (Myo5a and …).
you can access the full report [here][1]
[1]:{{ site.url }}/download/mouse_genetic_report.pdf

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS8hAgDilitcTKpKSKJxjqbmZ591arP6Kw6plS2lReE3z5BB4j26hAglHRaXxhG3XCWLm4ts06zfW9U/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
