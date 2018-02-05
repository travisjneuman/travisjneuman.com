---
layout: page
title: Pages
permalink: /pages/
---

{% for page in site.pages %}
  {{ page.title }}
{% endfor %}
