# Text_Summarizer
<img alt="Licence" src="https://img.shields.io/github/license/Harsh188/Text_Summarizer">

This project is a part of my semester long 'mini-project' course at PES University. With the guidance of Dr. S Natarajan and the help of my fellow colleague Zayd J we were able to deploy google's state of the art abstractive text summarization model, PEGASUS, onto the internet for anyone to utilize.

[Deploying Abstractive Text Summarizer using GCP](https://docs.google.com/document/d/1_JBpDAIm8TGt2jCxjqpMoZqW_TU3s77H2RT-eP06HGI/edit?usp=sharing)

**Website:** (https://textsummarization-ddf77.web.app/)
*Note:* The website will depriciate on June 30th 2021 due to budget limitations.

**Started:** Jan 2021

**Finished:** May 2021

## Abstract: ##

Although emerging technology and a surplus of data are resulting in ground breaking research in the field of deep learning, deploying state of the art models into products is still a challenging task. In this work, we aim to expose the difficulties in deployment and operation to help familiarize individuals to the ML pipeline by utilizing various services on the Google Cloud Platform. We have implemented a state of the art transformer model, PEGASUS, in an end-to-end abstractive text summarizer product which has been deployed onto the internet for anyone to utilize.

## Description: ##

This project is a fully scalable end-to-end abstractive summarizer built on the state of the art [PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization](https://arxiv.org/pdf/1912.08777.pdf) (ICML 2020) model. This deep learning transformer based model was built last year [2020] by incredible people at Google. Our product takes this state of the art model and puts into a production enviroment for any user on the internet to utilize. 

> *The main goal of our project* is to familiarize developers to the process of deploying a state of the art deep learning model into production.

### Branches: ###

This github repository contains 3 different branches, each of which contain a different segment of our end-to-end product. The [React_Website](https://github.com/Harsh188/Text_Summarizer/tree/React_Website) branch contains, well you can guess, the code for our website which is programmed using REACT js. The [api](https://github.com/Harsh188/Text_Summarizer/tree/api) branch contains the code for the docker container which exists on cloud run. Finally the [model](https://github.com/Harsh188/Text_Summarizer/tree/model) branch contains all of the experiements we performed with different transformer based models during our initial testing phase.

## What we have learned: ##

This project is one of the first full scale products that we have created and deployed onto the internet. It is also our first time deploying an ML model. We learned a lot about the transformer/attention models, cloud technologies, ML pipeline, and much more.

Here is a neat list of all the technologies/skills/knowledge that we picked up with this project:

- Technologies
  - Front End
    - React JS
    - REST API
    - Firebase Web Hosting
  - Back End
    - Docker
    - Google Cloud Run
    - Node JS
    - Flask
  - Model Traning
    - Python
    - TensorFlow
    - Jupyter
    - Hugging Face Transformers
    - Local training done using RTX 3080
- Research
  - RNNs
  - LSTMs
  - GRUs
  - Transformers
    - Self-Attention
    - GPT
    - BERT
    - PEGASUS
