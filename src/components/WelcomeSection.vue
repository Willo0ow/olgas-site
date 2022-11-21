<template>
    <div class="welcome">
        <h1 class="welcome__title">Przekonaj się do ubezpieczenia</h1>
        <div class="welcome__icon">
            <img class="welcome__icon-img" src="../assets/images/chevron-down.png" alt="chevron-down" @click="scrollDown">
        </div>


    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        servicesSectionElement: {type: HTMLElement, required: true}
    },
    setup(props) {
        const viewPortHeight = `${window.innerHeight - 130}px`
        const scrollDown = () => {
            props.servicesSectionElement.scrollIntoView({behavior: "smooth"});
            
        }
        return {
            viewPortHeight,
            scrollDown
        }
    }
})
</script>
<style lang="scss">
.welcome {
    height: v-bind(viewPortHeight);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &__title{
        font-size: 5rem;
        font-weight: 600;
        max-width: 35rem;
        padding-left: 5rem;
    }
    &__icon{
        display: flex;
        justify-content: center;

    }
    &__icon-img{
        display: block;
        width: 100px;
        height: 100px;
        &:hover{
            border: 1px #c88b79 solid;
            border-radius: 100%;
        }
    }
}
</style>