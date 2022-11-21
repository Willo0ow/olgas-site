<template>
  <NavBar />
  <div class="content">

    <router-view v-slot="{ Component }">
      <Transition name="slide-right">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue"

export default defineComponent({
  components: { NavBar },

})

</script>


<style lang="scss">
.content {
  padding-left: 4rem;
  padding-right: 4rem;
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
