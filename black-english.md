---
layout: page
title: "Black English for Lawyers"
permalink: "/projects/black-english/"
---

<h2 id="pin-pen">Pin-Pen Merger</h2>

<button onclick="playAudio('pin-pen-1')">Pin</button>
<audio id="pin-pen-1" src="/audio/pin.mp3" type="audio/mp3"></audio>

<button onclick="playAudio('pin-pen-2')">Pen</button>  
<audio id="pin-pen-2" src="/audio/pen.mp3" type="audio/mp3"></audio>

<h2 id="feel-fill">Feel-Fill Merger</h2>

<button onclick="playAudio('feel-fill-1')">Feel</button>
<audio id="feel-fill-1" src="/audio/feel.mp3" type="audio/mp3"></audio>

<button onclick="playAudio('feel-fill-2')">Fill</button>
<audio id="feel-fill-2" src="/audio/fill.mp3" type="audio/mp3"></audio>

<h2 id="habitual-be">Habitual "be"</h2>

<button onclick="playAudio('habitual-1')">Example 1</button>
<audio id="habitual-1" src="/audio/habitual1.mp3" type="audio/mp3"></audio>

<button onclick="playAudio('habitual-2')">Example 2</button>
<audio id="habitual-2" src="/audio/habitual2.mp3" type="audio/mp3"></audio>

<script>
function playAudio(id) {
  document.getElementById(id).play(); 
}
</script>
