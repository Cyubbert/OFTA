<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: ui-sans-serif, system-ui, sans-serif;
  line-height: 1.6;
  background-color: #121212;
  color: #e0e0e0;
}

a {
  color: #90caf9;
  text-decoration: none;
}

h1, h2 {
  color: #ffffff;
}

button {
  background-color: #90caf9;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #64b5f6;
}

.page-cover-image {
  width: 100%;
  max-height: 30vh;
  object-fit: cover;
  filter: brightness(0.75);
}

.container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.home-nav {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #1e1e1e;
  padding: 0.5rem 1rem;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

.home-button {
  color: #90caf9;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid #333;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
}

.home-button:hover {
  background-color: #90caf9;
  color: #121212;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.card {
  position: relative;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-name {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.4rem 0;
  background: rgba(0,0,0,0.55);
  color: #ffffff;
  font-weight: 600;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.7);
}
</style>
