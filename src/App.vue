<template>
  <div :class="styles.app">
    <div :class="styles.nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import styles from "./App.sass";
export default {
  data() {
    return {
      styles,
    };
  },
};
</script>
