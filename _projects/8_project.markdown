---
layout: page
title: A Vessel Extraction Framework for Retinal and Conjunctival Vascular Tortuosity Analysis
description: A self-initiated research project.
img: /assets/img/tor.png
importance: 3
category: research
nav: true
---
In this research we analysed the association of retinal and conjunctival vascular tortuosity with diabetes. Previous studies in the literature suggests that the vascular tortuosity is a bio marker for any systemic diseases and these studies also suggests that the vascular tortuosity varies with the thickness of the vessels. This creates a need of a framework that can extract vessels of a desired thickness. To this end, we propose a framework that can extract vessels of specified thicknesses from retinal fundus images or external eye images. The proposed framework consist of a vessel probability map generation step followed by few post processing steps. The vessel probability maps are obtained using fully convolutional neural network architecture; Iternet which is trained separately to obtain vessel probability maps for retinal and external eye images. The vessels of desired thicknesses are extracted using the generated vessel probability maps and a hessian based multiscale vessel enhancement techniques. The extracted vessels were skeletonized and tortuosity was computed using several tortuosity indices. These calculated tortuosity values were used to analyze the association of diabetes with retinal and conjunctival vascular tortuosities. (Description was kindly provided by my ❤️[Malsha](https://malshav.github.io/))

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/tor.png' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    The prpose thickness-sensitive retinal/ conjunctival vessel extraction framework
</div>

### Publications
-----------------

<div class="publications">
  {% bibliography -f papers -q @*[project=tor]* %}
</div>