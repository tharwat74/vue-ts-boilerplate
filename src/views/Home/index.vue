<template>
  <div :class="styles.main">
    <div :class="styles.wrapper">
      <HelloWorld msg="Hello from Home page" />
    </div>
    <div :class="styles.dropDownWrapper">
      <label :class="styles.label">Single select</label>
      <multiselect
        v-model="value"
        :options="options"
        :searchable="false"
        :close-on-select="false"
        :show-labels="false"
        placeholder="Pick a value"
      ></multiselect>
      <pre><code>{{ value  }}</code></pre>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import styles from "./styles.module.sass";
import Vue from "vue";
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
  name: "Home",
  components: {
    HelloWorld,
    Multiselect,
  },
  data: () => ({
    styles,
    options: ["hello world", "hello", "world"],
    value: null,
  }),
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="sass" scoped>
.dropdown
</style>
