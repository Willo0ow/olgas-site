<template>
  <div>
    <NavBar />
    <div class="page">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  components: { NavBar },
});
</script>

<style lang="scss">
.page {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 120px;
}
.slide-right {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease-out;
  }
  &-enter-from {
    opacity: 0;
    transform: translateX(-100%);
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
