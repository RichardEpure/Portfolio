<script setup lang="ts">
import Card from "../models/card";
import Skills from "./Skills.vue";

interface Props {
  resume_card: Card;
}

const props = defineProps<Props>();

const type = props.resume_card.type;
let icon: string = "";
switch (type) {
  case "education":
    icon = "fa-graduation-cap";
    break;
  case "experience":
    icon = "fa-industry";
    break;
  case "project":
    icon = "fa-file-code";
    break;
}
</script>

<template>
  <div class="card block">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <span class="icon is-large mb-1">
            <font-awesome-icon :icon="`fa-solid ${icon}`" size="2xl" />
          </span>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ props.resume_card.title }}</p>
          <p v-if="props.resume_card.subtitle" class="subtitle is-6">
            {{ props.resume_card.subtitle }}
          </p>
        </div>
      </div>
      <div v-if="props.resume_card.content" class="content">
        {{ props.resume_card.content }}
      </div>
      <div class="content">
        <i>{{ props.resume_card.date }}</i>
      </div>
      <Skills
        v-if="props.resume_card.skills"
        :skills="props.resume_card.skills"
        layout="inside-card"
      />
    </div>
    <footer v-if="props.resume_card.url" class="card-footer">
      <a class="card-footer-item" :href="props.resume_card.url" target="_blank">
        View More
      </a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 20px;
  text-align: left;
}

.media {
  @media only screen and (max-width: $tablet) {
    flex-wrap: wrap;

    & > * {
      flex-basis: 100%;
    }
  }
}
</style>
