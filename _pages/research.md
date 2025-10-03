---
layout: page
title: research
permalink: /research/
description: Short descriptions of research projects.
nav: false
nav_order: 2
display_categories: #[research, internships, undergrad course projects]
horizontal: false
---

<div class="post">

  <article>
    <div class="cv">
      {% for data in site.data.projects %}
        <div class="card mt-3 p-3">
          <div>
            {% case data[0] %}
            {% when "projects" %}
              {% include resume/projects.html %}
            {% else %}
            {% endcase %}
          </div>
        </div>
      {% endfor %}
      </div>
  </article>

</div>

<!-- ### Johns Hopkins University, MD, USA (2021-Present)

* Working on optimal and private transfer learning for physiological predictive systems **(Advisor : Dr. Carey Priebe, a collaboration with Microsoft Research)**
* Explored the value of out-of-distribution data in generalizing to an in-distribution target task **(Advisors : Dr. Joshua Vogelstein, Dr. Pratik Chaudhari, a collaboration with UPenn)**
* Developed Kernel Density Networks (KDNs) with the aim of overcoming the overconfident problem in neural networks **(Advisor : Dr. Joshua Vogelstein)**
 
### University of Moratuwa, Sri Lanka (2016-2021)

* Developed a Graph Neural Network (GNN) based real-time hand gesture classification algorithm using forearm multi-channel sEMG signals **(Advisor : Dr. Chamira Edussooriya)**
* Developed deep learning methods for rodent behavior classification **(Advisor : Dr. Ranga Rodrigo)** 
* Developed a novel retinal and conjunctival vessel extraction framework featuring a fully convolutional network paired with a Hessian based multi-scale vessel enhancement technique **(Advisors : Dr. Anjula De Silva, Dr. Nuwan Dayananda, Prof. Saroj Jayasinghe, a collaboration with University of Colombo)**
* Designed and developed cost-effective active dry-contact sEMG sensors and acquisition circuitry, formulated a real-time hand gesture recognition algorithm using Temporal Muscle Activation maps based on multi-channel sEMG signals, interfaced the sensors and the recognition algorithm to produce control signals to drive a bionic hand **(Advisors: Dr. Simon Kappel, Dr. Thilina Lalitharatne)**

### Center for Advanced Imaging, University of Queensland, Australia (2018)

* Formulated a joint convolutional and spatial quad-directional Long Short-Term Memory network architecture to unwrap the noisy wrapped phase images **(Initial advising: Dr. Steffen Bollmann)**

### Florey Institute of Neuroscience, Melbourne, Australia (2017-2018)

* Developed MEALEARN, a software that can process 64-channel Multi-Electrode Array (MEA) signals acquired from in-vitro neuronal networks, extract robust interpretable features, classify these networks based on the Sodium ion channel mutation they contain, and visualize the mutation-cluåsters in the latent feature space **(Advisors: Prof. Steve Petrou, Prof. Saman Halgamuge)**
* Developed MEACON, a software aimed at determining whether the ion channel mutations cause changes to the connectivity patterns of in-vitro neuronal networks by modeling them as time varying graphs based on high density 120-channel MEA signals **(Advisors: Prof. Steve Petrou, Dr. Andre Peterson)**
* Developed software to visualize MEA spike trains and perform time series analysis of MEA parameters **(Advisors: Prof. Steve Petrou, Prof. Saman Halgamuge)** -->

-----------------
## Project Pages

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <h2 class="category">{{category}}</h2>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.html %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="grid">
          {% for project in sorted_projects %}
            {% include projects.html %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
  <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.html %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="grid">
        {% for project in sorted_projects %}
          {% include projects.html %}
        {% endfor %}
      </div>
    {% endif %}

  {% endif %}

</div>
