---
layout: page
title: Notes
permalink: /notes/
---

## Notes that don't fall into the KB or Blog sections.

[back](./)

##Test List

<div>
{% for post in site.posts %}
  {% if post.categories contains 'notes' %}
    <div class="post">
        <h3 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p class="meta">Date: {{ post.date }}</p>
    </div>
  {% endif %}
{% endfor %}
</div>
