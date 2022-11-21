<template>
    <WelcomeSection :servicesSectionElement="servicesSectionElement" />
    <ServicesSection id="servicesSectionElement" />
</template>
<script lang="ts">
import { defineComponent,ref, onMounted } from 'vue';
import ServicesSection from './ServicesSection.vue';
import WelcomeSection from './WelcomeSection.vue';

export default defineComponent({
    components: { ServicesSection, WelcomeSection },
    setup(){
        const servicesSectionElement = ref()
        onMounted(()=>{
            servicesSectionElement.value = document.getElementById("servicesSectionElement")
        })
        return {
            servicesSectionElement
        }
    }
})
</script>
<style lang="scss">

</style>