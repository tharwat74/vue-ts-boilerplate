<template>
  <div :class="styles.wrapper">
    <div :class="styles.navWrapper" @click="drawer = !drawer">
      <div :class="styles.nav" />
      <div :class="styles.nav" />
      <div :class="styles.nav" />
    </div>
    <md-drawer :md-active.sync="drawer" :class="styles.drawer" md-swipeable>
      <div
        :class="styles.drawerWrapper"
        v-for="(item, x) in routes"
        :key="{ x }"
      >
        <router-link :to="item.value" :class="styles.home">{{
          item.name
        }}</router-link>
      </div>
    </md-drawer>
    <span :class="styles.title" v-if="drawer">{{ title }}</span>
  </div>
</template>

<script>
import styles from "./styles.module.sass";
export default {
  data: () => ({
    title: "Hello Wrold",
    styles,
    drawer: null,
    routes: [
      { name: "Home", value: "/" },
      { name: "About", value: "/about" },
    ],
  }),
};
</script>
