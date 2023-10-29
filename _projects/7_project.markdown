---
layout: page
title: Deep Neural Networks for Phase Unwrapping in 2D Images
description: A self-initiated research project.
img: /assets/img/unwrap.png
importance: 2
category: research
nav: true
---
Phase unwrapping is a prevalent problem in Quantitative Susceptibility Mapping (QSM) in Magnetic Resonance Imaging. The objective of phase unwrapping is to recover the true phase from a wrapped phase signal. Conventional phase unwrapping techniques are prone to errors at lower SNR values and expend a high computational time. Recently, few studies have explored the possibility of using deep learning based techniques to perform phase unwrapping under severe noise conditions and with a lower computational time. However, these deep learning based methods require large datasets for training, thus limiting the application in real- world scenarios. Most wrapped phase images contain global spatial structures that can provide information relevant to the mapping between the wrapped phase and true phase images. However, the existing deep learning based phase unwrapping techniques are comprised of typical Fully Convolutional Networks which ignore the spatial relationships among different local regions of a given image. To address these shortcomings, we proposed a spatial-quad directional LSTM based encoder- decoder network architecture which predicts the true phase image for a given wrapped phase image. The Spatial Quad-Directional Block learns the global spatial relationships between image regions passing four sequences formed by traversing the input feature maps through LSTM layers. We trained the proposed network by using pairs of simulated wrapped phase images and true phase images and the phase images were created by adding and subtracting Gaussians of different shapes and positions. We thankfully acknowledge Dr. Steffen Bollmann and Dr. Kanghyung Ryu for introducing this interesting problme to us.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/unwrap.png' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    A qualitative and quantitative performance comparison of contemporary phase unwrapping algorithms.
</div>

### Publications
-----------------

<div class="publications">
  {% bibliography -f papers -q @*[project=unwrap]* %}
</div>