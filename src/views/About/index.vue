<template>
  <div :class="styles.wrapper">
    <div :class="styles.item" v-for="(item, x) in title" v-bind:key="x">
      <h1>{{ item.name }}</h1>
    </div>
  </div>
</template>

<script>
import styles from "./styles.module.sass";
export default {
  data: () => ({
    title: [
      { name: "Hello" },
      { name: "form" },
      { name: "about" },
      { name: "page" }
    ],
    styles
  })
};
</script>
