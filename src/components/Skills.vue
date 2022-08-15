<script setup lang="ts">
interface Props {
  skills: string[];
  layout?: "inside-card";
}

const props = defineProps<Props>();
console.log(props.layout);
</script>

<template>
  <div class="tags" :class="props.layout">
    <p v-for="skill in props.skills" class="tag is-size-6">{{ skill }}</p>
  </div>
</template>

<style lang="scss" scoped>
.tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 550px;
}

.inside-card {
  justify-content: flex-start;
  margin: 0;
  max-width: unset;

  .tag {
    box-shadow: $shadow-thin;
  }
}

.tag {
  box-shadow: $shadow;

  &:last-child {
    margin-right: 0.5rem;
  }
}
</style>
