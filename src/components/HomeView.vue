<template>
    <WelcomeSection :servicesSectionElement="servicesSectionElement" />
    <hr class="section-bar">
    <ServicesSection id="servicesSectionElement" />
    <hr class="section-bar">
    <h2 class="section-header">KONTAKT</h2>
    <div class="contact">
        <p class="contact__label">e-mail</p>
        <p class="contact__info">kiraga.olga@allianz.com.pl</p>

        <p class="contact__label">nr telefonu</p>
        <p class="contact__info">511 470 473</p>

        <p class="contact__label">NIP</p>
        <p class="contact__info">5851434511</p>

        <p class="contact__label">Biuro</p>
        <p class="contact__info">ul.Grunwaldzka 163 piętro 1, Gdańsk</p>

        <p class="contact__annotation">Spotkania odbywają się w biurze, u klienta, na mieście lub zdalnie.</p>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref, onMounted } from 'vue';
import ServicesSection from './ServicesSection.vue';
import WelcomeSection from './WelcomeSection.vue';
import ContactView from './ContactView.vue';

export default defineComponent({
    components: { ServicesSection, WelcomeSection, ContactView },
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
.contact {
    width: fit-content;
    border-radius: 0.2rem;
    box-shadow: 1px 1px 3px 1px rgb(0 0 0 / 16%), 0 3px 5px 5px rgb(0 0 0 / 7%);
    padding: 1rem;
    @media screen and (min-width: 400px) {
        padding: 2rem;
    }
    max-width: 40rem;
    margin: 0 auto 5rem;
    &__info,
    &__label,
    &__annotation {
        padding: 0;
        margin: 0;
    }

    &__info {
        font-weight: 600;
        font-size: 1.1rem;
        line-height: 1.5rem;
        @media screen and (min-width: 400px) {
            font-size: 1.3rem;
        }
    }

    &__label {
        font-weight: 300;
        margin-top: 1rem;
    }
    &__label:first-child {
        margin-top: 0;
    }

    &__annotation {
        font-style: italic;
        margin-top: 1.5rem;
    }

}
.section-bar {
    height: 2px;
    background-color: #cbc1be8f;
    margin: 0 auto;
    width: 50%;
    border: none;
    margin-top: 5rem;
}

</style>