<template>
    <div class="contact">
        <p class="contact__info">kiraga.olga@aviva.com.pl</p>
        <p class="contact__label">e-mail</p>

        <p class="contact__info">511 470 473</p>
        <p class="contact__label">nr telefonu</p>

        <p class="contact__info">5851434511</p>
        <p class="contact__label">NIP</p>

        <p class="contact__info">ul.Grunwaldzka 163 piętro 1, Gdańsk</p>
        <p class="contact__label">Biuro</p>

        <p class="contact__annotation">Spotkania odbywają się w biurze, u klienta, na mieście lub zdalnie.</p>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const topMargin = `${(window.innerHeight - 130 - 252) / 40}rem`
        return {
            topMargin
        }
    }
})
</script>
<style lang="scss">
.contact {
    margin-top: v-bind(topMargin);

    &__info,
    &__label,
    &__annotation {
        padding: 0;
        margin: 0;
    }

    &__info {
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 1.5rem;
        margin-top: 1rem;
    }

    &__label {
        font-weight: 300;
    }

    &__annotation {
        font-style: italic;
        margin-top: 0.5rem;
    }

}
</style>