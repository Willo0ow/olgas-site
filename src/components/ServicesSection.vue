<template>
    <div class="services">
        <BaseCard class="services__card" v-for="(card, index) in cards" :key="index" :title="card.title" :image="card.img" :content="card.description" />
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
                description: "Zabezpieczenie dla rodziny, Utrzymanie standardów życia.",
                img: "zycie.jpeg",
                show: false
            },
            {
                title: "Zdrowie",
                description: "Pieniądze pozwalające wrócić do zdrowia po operacji czy poważnej chorobie, oraz rekompensata przy niezdolność do pracy.",
                img: "zdrowie.jpeg",
                show: false
            },
            {
                title: "Wypdaki",
                description: "Zwrot kosztów za leczenie i rehabilitacyjne oraz rekompensatą za utratę zdrowia.",
                img: "wypadki.jpeg",
                show: false
            },
            {
                title: "Leczenie za granicą",
                description: "2 miliony Euro na leczenie poważnych chorób zagranicą.",
                img: "leczenie_zagranica.jpeg",
                show: false
            },
            {
                title: "Emerytura",
                description: "Pieniądze na utrzymanie standardu życia w okresie jesieni życia.",
                img: "emerytura.jpeg",
                show: false
            },
            {
                title: "Przyszłość dzieci",
                description: "Dobry start dla dzieci w dorosłe życie i studia.",
                img: "przyszlosc_dzieci.jpeg",
                show: false
            },
            {
                title: "Firma",
                description: "Ubezpieczenie pracowników, OC zawodowe.",
                img: "firma.png",
                show: false
            },
            {
                title: "Sukcesja zawodowa",
                description: "Zabezpieczenie wspólników i firm rodzinnych.",
                img: "sukcesja_zawodowa.jpeg",
                show: false
            },
            {
                title: "Dom",
                description: "Zabezpieczenie majątku od zdarzeń losowych, OC w życiu prywatnym.",
                img: "dom.jpeg",
                show: false
            },
            {
                title: "Podróż",
                description: "Koszty leczenia zagranicą, ubezpieczenie bagażu/ sprzętu sportowego, OC w życiu prywatnym.",
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
    max-width: 1400px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media screen and (min-width: 550px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (min-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media screen and (min-width: 1300px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}
</style>