<script setup lang="ts">
import SocialLink from "./SocialLink.vue";
</script>

<template>
  <div class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image mb-4 is-128x128">
          <img
            class="is-rounded"
            src="../assets/face.png"
            alt="picture of Richard"
          />
        </figure>
        <h1 class="title is-3">RICHARD EPURE</h1>
        <h2 class="subtitle">Software Engineer</h2>
        <div class="is-flex is-justify-content-center is-align-items-center">
          <SocialLink icon="github" url="https://github.com/RichardEpure" />
          <SocialLink
            icon="linkedin"
            url="https://www.linkedin.com/in/richard-epure-803733190/"
          />
          <SocialLink
            icon="stack-overflow"
            url="https://stackoverflow.com/users/18175770/richard-epure"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  margin: auto;

  img {
    width: 128px;
    height: 128px;
    object-fit: cover;
  }
}
</style>
