---
layout: page
title: Knowledgebase
permalink: /knowledgebase/
---

## Welcome to my KB.

[back](./)

##Test List

<div>
{% for post in site.posts %}
  {% if post.categories contains 'knowledgebase' %}
    <div class="post">
        <h3 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p class="meta">Date: {{ post.date }}</p>
    </div>
  {% endif %}
{% endfor %}
</div>
