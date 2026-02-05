<script setup>
import { ref } from "vue";

import cover from "@/assets/images/AUGH.png";
import norrun from "@/assets/images/Map.png";
import talona from "@/assets/images/2.png";
import liira from "@/assets/images/Liira.png";
import sune from "@/assets/images/Illustration.png";

const activeTab = ref("world");

const tabs = [
  { id: "world", label: "World & Deities" },
  { id: "kingdoms", label: "Kingdoms" },
  { id: "spells", label: "Spells" },
];

const cardsByTab = {
  world: [
    { name: "Norrun", img: norrun, link: "/world/norrun" },
    { name: "Talona", img: talona, link: "/world/talona" },
    { name: "Liira", img: liira, link: "/world/liira" },
    { name: "Sune", img: sune, link: "/world/sune" },
  ],
  kingdoms: [
    { name: "Lacrima", img: cover, link: "#" },
    { name: "Letlon", img: cover, link: "#" },
    { name: "Duweil", img: cover, link: "#" },
    { name: "Ivia", img: cover, link: "#" },
    { name: "Dredel", img: cover, link: "#" },
  ],
  spells: [
    { name: "Conjuration", img: cover, link: "#" },
    { name: "Transmutation", img: cover, link: "#" },
    { name: "Illusion", img: cover, link: "#" },
    { name: "Evocation", img: cover, link: "#" },
    { name: "Enchantment", img: cover, link: "#" },
  ],
};
</script>


<template>
  <article class="page sans">
    <header>
      <img class="page-cover-image" :src="cover" alt="Cover image" />
      <h1 class="page-title">Out for the Ancients</h1>
    </header>

    <main class="container">

      <div class="tabs">
        <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="cards-container">
        <router-link
            v-for="card in cardsByTab[activeTab]"
            :key="card.name"
            :to="card.link"
            class="card"
        >
          <img :src="card.img" :alt="card.name" />
          <div class="card-name">{{ card.name }}</div>
        </router-link>
      </div>
    </main>
  </article>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 2em auto;
  max-width: 900px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  line-height: 1.6;
  color: #e0e0e0;
  background-color: #121212;
}

.page-cover-image {
  width: 100%;
  max-height: 30vh;
  object-fit: cover;
  filter: brightness(0.75);
}

.page-title {
  text-align: center;
  margin: 1rem 0 2rem 0;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
}
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tab {
  padding: 0.5rem 1rem;
  background: #1e1e1e;
  color: #90caf9;
  border: 1px solid #333;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}
.tab.active {
  background-color: #90caf9;
  color: #121212;
}


.column-list {
  display: flex;
  gap: 2rem;
}

.column-small {
  width: 40%;
}

.column-large {
  width: 60%;
}

.source {
  border: 1px solid #333;
  border-radius: 6px;
  padding: 1.2rem;
  background-color: #1e1e1e;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}

.source iframe {
  border-radius: 6px;
}

button {
  background-color: #90caf9;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

button:hover {
  background-color: #64b5f6;
  transform: translateY(-2px);
}

button a {
  color: #121212;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  display: inline-block;
}

.collection-title {
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
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

a {
  color: #90caf9;
  text-decoration: underline;
}

@media (min-width: 1200px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .column-list {
    flex-direction: column;
  }

  .column-small, .column-large {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }

  .card {
    height: 260px;
  }

  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .card {
    height: 260px;
  }

  .page-title {
    font-size: 1.8rem;
  }
}
</style>
