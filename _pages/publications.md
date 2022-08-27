---
layout: page
permalink: /publications/
title: publications
description: The * denotes equal first authors. [C], [J], [W] and [P] stand for conference papers, journal articles, workshop papers and preprints.
years: [2022, 2021, 2020]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
