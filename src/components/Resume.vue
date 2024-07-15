<script setup lang="ts">
import Card from "../models/card";
import ResumeCard from "./ResumeCard.vue";
import Skills from "./Skills.vue";

const education_cards: Card[] = [
  {
    type: "education",
    title: "Queen Mary University of London",
    subtitle: "BSc of Computer Science with Industrial Experience",
    content: `Graduated with 1st class honours and won the Draper's Company undergraduate prizes for outstanding achievements in the academic years 2020/2021 & 2021/2022.`,
    skills: [
      "Web Programming",
      "Algorithms & Data Structures",
      "Distributed Systems",
      "Software Engineering",
      "Database Systems",
      "Computer Graphics",
      "Neural Networks",
      "Graphical User Interfaces",
      "Interaction Design",
    ],
    date: "September 2018—July 2022",
  },
  {
    type: "education",
    title: "East Barnet School",
    subtitle: "A levels & GCSEs",
    date: "September 2016—June 2018",
  },
];

const experience_cards: Card[] = [
  {
    type: "experience",
    title: "2Simple",
    subtitle: "Software Developer",
    content: `• Migrated a project from Vue 2 class components to Vue 3 composition API, updated dependencies and build tools.
• Developed internal tooling for automated testing using puppeteer for various applications.
• Created unit and integration tests with Jest and Vue Test Utils, and prepared test plans for the testing team.
• Independently led significant legacy project rewrites from backbone.js to Vue 3 for improved maintainability, flexibility, and developer accessibility.
• Implemented backend API for AI with models from Open AI & Stability AI, and configured an admin panel for prompt customization using handlebars.
• Collaborated closely with the design team to optimize user experience on the frontend.`,
    skills: [
      "TypeScript",
      "Vue",
      "JavaScript",
      "MonoDB",
      "Jest",
      "SCSS",
      "PHP",
      "jQuery",
      "Docker",
    ],
    date: "March 2023—Present",
  },
  {
    type: "experience",
    title: "Soapbox",
    subtitle: "Full-Stack Developer",
    content: `• Developed custom themes, plugins, and components for WordPress using PHP for back-end development.
• Implemented best practices for web development including BEM, ITCSS, and WCAG standards.
• Ensured reliability of live websites by using SSH for remote deployment, backups, and maintenance.
• Streamlined work across multiple projects by containerizing each environment with Docker and DDEV.
• Engaged with clients to address and resolve issues effectively while maintaining detailed documentation.`,
    skills: [
      "JavaScript",
      "jQuery",
      "SCSS",
      "BEM",
      "ITCSS",
      "PHP",
      "WordPress",
      "Docker",
    ],
    date: "August 2020—June 2021",
  },
  {
    type: "experience",
    title: "Freelance",
    subtitle: "Web Developer & Consultant",
    content: `• Utilized AWS to host, certify, cache, and distribute websites.
• Developed a responsive front-end to ensure compatibility across various screen sizes.
• Integrated relevant APIs like Google Maps Platform for enhanced functionality.
• Enhanced SEO through the use of Metadata, accessibility, and optimizing data loading efficiency.
• Ensured GDPR compliance in website development when necessary.
• Collaborated with clients to define requirements and strategize the website's development.`,
    skills: ["JavaScript", "SCSS", "AWS"],
    date: "February 2019—September 2019",
  },
];

const pet_projects: Card[] = [
  {
    type: "project",
    title: "Crust",
    subtitle: "Communications App",
    content: `A collaborative project that features a peer-to-peer text, voice, and screensharing application made using Tauri, Vue, Vite and TypeScript.`,
    skills: ["Rust", "Tauri", "TypeScript", "Vue", "Vite", "SCSS"],
    date: "",
    url: "https://github.com/CallumWatkins/crust",
  },
  {
    type: "project",
    title: "2048",
    subtitle: "Video game",
    content: `A remake of the classic game 2048, written in Rust using Bevy.`,
    skills: ["Rust", "Bevy"],
    date: "",
    url: "https://github.com/RichardEpure/2048",
  },
  {
    type: "project",
    title: "Sokoban Solver",
    subtitle: "Reinforcement learning AI",
    content: `My final year project for University. Creating a machine learning model to play and solve Sokoban levels. The learning experience has been invaluable as I tackled an extremely difficult challenge that is still currently being explored by AI experts.`,
    skills: ["Python", "Stable Baselines", "Gym"],
    date: "",
    url: "https://github.com/RichardEpure/Sokoban-Solver",
  },
  {
    type: "project",
    title: "3D Snake",
    subtitle: "Video game",
    content: `My first attempt at tackling OpenGL and shaders using C++ with GLFW. Sparked my interest in shaders and became my motivation for taking Computer Graphics at University.`,
    skills: ["C++", "OpenGL", "GLFW", "GLSL"],
    date: "",
    url: "https://github.com/RichardEpure/3D-snake",
  },
];

const skills: string[] = [
  "TypeScript",
  "JavaScript",
  "Go",
  "Rust",
  "Python",
  "MonoDB",
  "React",
  "Vue",
  "WebGL",
  "WordPress",
  "AWS",
  "Jest",
  "Docker",
  "PHP",
  "Java",
  "Tauri",
  "Django",
  "Express.js",
  "SCSS",
  "jQuery",
  "C++",
  "GLSL",
  "Godot",
];
</script>

<template>
  <section class="section resume">
    <div class="container">
      <h2 class="title pb-6 pt-4">Resume</h2>
      <div class="resume-section">
        <h3 class="title is-4">Education</h3>
        <ResumeCard v-for="card in education_cards" :resume_card="card" />
      </div>
      <div class="resume-section">
        <h3 class="title is-4">Experience</h3>
        <ResumeCard v-for="card in experience_cards" :resume_card="card" />
      </div>
      <div class="resume-section">
        <h3 class="title is-4">Personal Projects</h3>
        <ResumeCard v-for="card in pet_projects" :resume_card="card" />
      </div>
      <!-- <div class="resume-section">
        <h3 class="title is-4">Skills</h3>
        <Skills :skills="skills" />
      </div> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.resume {
  background-color: $scheme-main-ter;
  text-align: center;

  &-section {
    margin-bottom: 5.5rem;

    &:last-child {
      margin-bottom: 3rem;
    }
  }
}
</style>
