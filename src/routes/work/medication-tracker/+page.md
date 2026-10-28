<script lang="ts">
 import BMOCover from "$lib/images/covers/BMO-cover.webp";
 import sketch from "$lib/images/medication-tracker/sketch-prototype.webp";
 import spreadsheet from "$lib/images/medication-tracker/face-spreadsheet.webp";
 import partsLaidOut from "$lib/images/medication-tracker/parts.webp";
 import internals from "$lib/images/medication-tracker/internals.webp";
 import expo from "$lib/images/medication-tracker/expo.webp";

</script>

## Medication Tracker

### Context

BMO the medication tracker is a self-guided university project exploring how thoughtfully designed tech can make daily medication routines easier to manage.

### The Brief

The goal was to create a less disruptive alternative to traditional alarms. I wanted to develop a more inviting medication reminder that encourages consistent use through clear visual prompts and simple interaction, rather than relying on disruptive sounds or easily ignored phone notifications.

### The Problem

The main challenge was designing a reminder that was noticeable enough to prompt action without unnecessarily interrupting the someone's day. I find that too often, I'm in the middle of something right as these alarms go off and I'm not quite ready to stop what I'm doing.

<img src={sketch} alt="Sketch and cardboard prototype" />

### Insights

This project introduced me to coding an ESP32 in C/C++, both of which I'm new to. Integrating hardware and software was a bit confusing and frustrating since my understanding of it was quite basic. There was a lot of research and failed attempts involved (including times when spent 10 minutes trying to figure out why things stopped working when I just wired it wrong). In saying that, learning how the data was transmitted and the wiring of the ESP32 to the dot matrix display to correctly show my reminders was really fun. I had done quite a bit of planning for the faces that it makes while it is idle and not displaying a message to make it more like a friendly companion.

Creating the enclosure was incredibly time consuming and taught me a lot about how to iterate with one change at a time to keep track of my progress. Refining the physical components taught me the importance of tolerances, something I didn't pay much attention to until my parts disagreed with each other and refused to fit.

<img src={spreadsheet} alt="Spreadsheet with face bitmap" />
<img src={partsLaidOut} alt="Parts spread out on the table" />
<img src={internals} alt="Wiring on the inside" />

### The Solution

The experience built my confidence in learning unfamiliar technologies and reinforced my love for both my industrial design and software development background. It also showed me how iterative prototyping can help bridge the gap between an initial concept and a functional product that can look good and be enjoyable to use. Here's an image of it displayed at my unit expo at the end of the semester!

<img src={expo} alt="Table layout at expo" />
