<template>
  <div :class="styles.wrapper">
    <div :class="styles.navWrapper" @click="drawer = true">
      <div :class="styles.nav" />
      <div :class="styles.nav" />
      <div :class="styles.nav" />
    </div>
    <md-drawer
      :md-active.sync="drawer"
      :class="styles.drawer"
      @close="drawer = false"
      @open="drawer = true"
    >
      <div
        :class="styles.drawerWrapper"
        @click="drawer = false"
        v-for="(item, index) in routes"
        v-bind:key="index"
      >
        <router-link :to="item.value" :class="styles.home">
          {{
          item.name
          }}
        </router-link>
      </div>
    </md-drawer>
    <span :class="styles.title" v-if="drawer">{{ title }}</span>
  </div>
</template>

<script>
import styles from "./styles.module.sass";
import Vue from "vue";
export default Vue.component("Header", {
  data: () => ({
    title: "Hello Wrold",
    styles,
    drawer: false,
    routes: [
      { name: "Home", value: "/" },
      { name: "About", value: "/about" }
    ]
  })
});
</script>
