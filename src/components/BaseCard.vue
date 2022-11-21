<template>
    <div class="card">
        <img v-if="image" class="card__image" :src="imageUrl" :alt="image">
        <div class="card__title">{{title}}</div>
        <div class="card__content">{{content}}</div>
        <div class="card__actions"></div>
    </div>
</template>
<script lang="ts">
import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {type: String, default: ""},
        image: {type: String, default: ""},
        content: {type: String, default: ""},
        width: {type: String, default: 'unset'},
    },
    setup(props){
        const imageUrl = computed(()=>{
            return new URL(`../assets/images/${props.image}`, import.meta.url).href
        })
        return {
            imageUrl
        }
    }

})
</script>
<style lang="scss">
.card{
    width: v-bind(width);
    border-radius: 0.2rem;
    box-shadow: 1px 1px 3px 1px rgb(0 0 0 / 16%), 0 3px 5px 5px rgb(0 0 0 / 7%);
    &__title{
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem;
    }
    &__image{
        width: 100%;
        height: 70%;
        object-fit: cover;
    }
    &__content{
            padding: 1rem;
    }
    &__actions{
            padding: 1rem;
    }
}
</style>