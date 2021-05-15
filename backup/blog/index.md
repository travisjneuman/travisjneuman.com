---
layout: page
title: Blog
permalink: /blog/
---

## Welcome to my blog.

[back](./)

##Test List

<div>
{% for post in site.posts %}
  {% if post.categories contains 'blog' %}
    <div class="post">
        <h3 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p class="meta">Date: {{ post.date }}</p>
    </div>
  {% endif %}
{% endfor %}
</div>
