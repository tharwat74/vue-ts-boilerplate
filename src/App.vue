<template>
  <div :class="styles.app">
    <Header />
  </div>
</template>

<script>
import styles from "./App.sass";
import Header from "./views/Header/index";
export default {
  components: {
    Header,
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
