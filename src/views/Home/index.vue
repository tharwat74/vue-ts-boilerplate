<template>
  <div :class="styles.wrapper">
    <HelloWorld msg="Hello from Home page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import styles from "./styles.module.sass";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data: () => ({
    styles
  })
};
</script>
