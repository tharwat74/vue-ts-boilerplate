<template>
  <div :class="styles.app">
    <Header />
    <div :class="styles.separator" />
    <router-view />
  </div>
</template>

<script>
import styles from "./App.sass";
import Header from "./views/Header/index";
export default {
  components: {
    Header
  },
  data() {
    return {
      styles
    };
  }
};
</script>
