---
layout: page
title: CheapTorch
subtitle: 
bigimg: /img/cheaptorch.jpg
---

<p align="right">
<br>You can access the github repo <a href="https://github.com/ymentha14/MiniDeepLframework"> here </a><br> and the report <a href="https://drive.google.com/file/d/1WRjTg62jNY3bw0rw9NKA2Lji8GoTkHMP/view?usp=sharing"> here </a></p>

## Introduction
After Facebook started storing Zetabytes of various private data about their users (among it H24 4k video recording of the users cats) a unique bug in history destroyed all instances of the Autograd Framework. Luckily, some coders were brave (desperate?) enough to recode it themselves. Is it working? Should we forget about Deep Learning? Check the rest of the repo in order to know!

## Implementation
The constraints of the project *(in the context of the Deep Learning course EE-559)* consisted in coding without using the **autograd** framework from pytorch, but still being able to implement fully functional neural networks.

My approach was inspired from pytorch's source code: I made the my *Tensor2* class inherit from the pytorch regular tensor, and added as many private function with hooks as necessary, with each tensor refering to its parent tensor through a lambda function for the backpropagation to flow.

Python's ducktyping was of course one of the core component to this end.

This technique allowed me to obtain a concise yet eficient library, performing closely as fast as the native one. I could conclude this project in 2 days, while this normally take a weektime for most of the teams.



