---
layout: page
title: Partager, encore et toujours
date: 2015-10-05 17:15:20
i18n-key: about-me
permalink: /a-propos/partage/index.html
---

Je suis convaincu que le partage de l'information est bénéfique à tous : j'enseigne à [Ingésup Bordeaux](http://www.ingesup.com/ "Ingesup") ; je serais aussi ravi de [venir discuter avec vous contre un sandwich](http://www.brownbaglunch.fr/baggers.html#Boris_Schapira_Bordeaux "BrownBagLunch France") ; vous pouvez m'avoir croisé dans plusieurs conférences, de Barcelone à Paris, mais ma petite préférence reste [Sud Web](http://sudweb.fr/ "SudWeb.fr").

## Les sujets dont j'aimerais parler

Il y a plusieurs sujets dont j'aimerai parler : si cela vous intéresse aussi, parlons-en et organisons des conférences ensemble.

{% assign the_subjects=site.confs %}
<div class="conf-subjects">
{% for conf in the_subjects %}
  {% unless conf.event %}
    <article class="conf-subject">
      <h3>{{ conf.title }}</h3>
      {{ conf.description | raw }}
    </article>
  {% endunless %}
{% endfor %}
</div>

## Les sujets dont j'ai déjà parlé

Il y a plusieurs sujets dont j'ai déjà parlé, n'hésitez pas à jeter un œil aux contenus.

{% assign the_subjects=site.confs %}
<div class="conf-subjects">
{% for conf in the_subjects %}
  {% if conf.event %}
    <article class="conf-subject">
      <h3><a href="{{ conf.url }}">{{ conf.title }}</a></h3>
      {{ conf.description }}
    </article>
  {% endif %}
{% endfor %}
</div>