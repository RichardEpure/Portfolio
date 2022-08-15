<script setup lang="ts">
interface Props {
  icon: "stack-overflow" | "linkedin" | "github";
  url: string;
  size?: "2xs" | "xs" | "sm" | "m" | "lg" | "xl" | "2xl";
}

const props = withDefaults(defineProps<Props>(), {
  size: "xl",
});
</script>

<template>
  <span class="icon is-large">
    <a :href="props.url" target="_blank">
      <font-awesome-icon
        :icon="`fa-brands fa-${props.icon}`"
        :size="props.size"
      />
    </a>
  </span>
</template>

<style lang="scss" scoped></style>
