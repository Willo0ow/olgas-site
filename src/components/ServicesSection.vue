<template>
    <div class="services">
        <BaseCard class="services__card" v-for="(card, index) in cards" :key="index" width="300px" :title="card.title" :image="card.img" :content="card.description" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BaseCard from './BaseCard.vue';

export default defineComponent({
    components: { BaseCard },
    setup() {
        const cards = [
            {
                title: "Życie",
                description: "blablabla",
                img: "zycie.jpeg",
                show: false
            },
            {
                title: "Zdrowie",
                description: "blablabla",
                img: "zdrowie.jpeg",
                show: false
            },
            {
                title: "Wypdaki",
                description: "blablabla",
                img: "wypadki.jpeg",
                show: false
            },
            {
                title: "Leczenie za granicą",
                description: "blablabla",
                img: "leczenie_zagranica.jpeg",
                show: false
            },
            {
                title: "Emerytura",
                description: "blablabla",
                img: "emerytura.jpeg",
                show: false
            },
            {
                title: "Przyszłość dzieci",
                description: "blablabla",
                img: "przyszlosc_dzieci.jpeg",
                show: false
            },
            {
                title: "Firma",
                description: "blablabla",
                img: "firma.png",
                show: false
            },
            {
                title: "Sukcesja zawodowa",
                description: "blablabla",
                img: "sukcesja_zawodowa.jpeg",
                show: false
            },
            {
                title: "Dom",
                description: "blablabla",
                img: "dom.jpeg",
                show: false
            },
            {
                title: "Podróż",
                description: "blablabla",
                img: "podroz.jpeg",
                show: false
            },
        ]
        return {cards}
    }
})
</script>
<style lang="scss">
.services {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &__card{
        margin: 1rem;
    }
}
</style>