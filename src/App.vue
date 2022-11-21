<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <Transition name="slide-right">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue"

export default defineComponent({
  components: { NavBar },

})

</script>


<style lang="scss">
.slide-right {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease-out;
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
