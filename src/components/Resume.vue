<script setup lang="ts">
import Card from "../models/card";
import ResumeCard from "./ResumeCard.vue";
import Skills from "./Skills.vue";

const education_cards: Card[] = [
  {
    type: "education",
    title: "Queen Mary University of London",
    subtitle: "BSc of Computer Science with Industrial Experience",
    content: `Graduated with 1st class honours and won the Draper's Company undergraduate prizes for
      outstanding achievements in the academic years 2020/2021 & 2021/2022.`,
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
    title: "Soapbox",
    subtitle: "Web Developer",
    content: `Joined a team of full stack web developers and contributed to over a dozen projects such as 'HDRUK',
      'Ada Lovelace Institute', and 'Institute of Development Studies'. There I took a variety of responsibilites
      such as working on new projects, performing maintenenace on older projects, deploying builds,
      communicating with clients, and bug fixing.`,
    skills: [
      "HTML/CSS",
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
    content: `Designed, created and hosted several websites as a freelance web developer for
      GSA Construction, GRS Construction, and IBJoinery.`,
    skills: ["HTML/CSS", "SCSS", "JavaScript", "AWS"],
    date: "February 2019—September 2019",
  },
];

const pet_projects: Card[] = [
  {
    type: "project",
    title: "Crust",
    subtitle: "Communications App",
    content: `Crust is a work in progress Tauri based application for voice communication, chat messaging and
      screen sharing. It uses a peer-to-peer model to give users more control over their network.`,
    skills: ["Rust", "Tauri", "TypeScript", "Vue", "Vite", "SCSS"],
    date: "July 2022—Present",
    url: "https://github.com/CallumWatkins/crust",
  },
];

const skills: string[] = [
  "Java",
  "Rust",
  "Python",
  "PHP",
  "JavaScript",
  "TypeScript",
  "HTML/CSS",
  "C++",
  "GLSL",
  "Tauri",
  "Django",
  "Vue",
  "React",
  "SCSS",
  "WebGL",
  "jQuery",
  "PyTorch",
  "PyGame",
  "JavaFX",
  "SQL",
  "WordPress",
  "AWS",
  "Docker",
  "Git",
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
      <div class="resume-section">
        <h3 class="title is-4">Skills</h3>
        <Skills :skills="skills" />
      </div>
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
