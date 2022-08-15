<script setup lang="ts"></script>

<template>
  <section class="section is-medium">
    <div class="container">
      <div class="inner">
        <h2 class="title has-text-centered">About Me</h2>
        <p class="content">
          Hello! I am a developer that has been programming ever since I chose
          Computer Science as a GCSE module. During my time as a student I have
          learnt a lot about web development and managed to gain experience in
          the industry. I also enjoy game development and computer graphics as a
          hobby and I commonly learn new languages by creating simple games with
          them.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  background-color: $tertiary;
}

.inner {
  margin: auto;
  max-width: 800px;
}

.content {
  font-family: "Montserrat";
  font-size: 18px;
  letter-spacing: 0.15rem;
  line-height: 2;
  text-align: justify;
}
</style>
