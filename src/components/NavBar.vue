<template>
    <nav class="nav__container">
        <div class="nav__logo">
            <div class="nav__logo-image">
                <img src="../assets/images/olga_logo.png" alt="logo" />
            </div>
            <div class="nav__logo-text">
                <div class="nav__logo-text-title">Olga Kiraga</div>
                <div class="nav__logo-text-subtitle">Specjalista ds. Ubezpieczeń i Inwestycji</div>
            </div>
        </div>
        <div class="nav__links">
            <router-link :to="{name: 'Home'}" class="nav__link-item" active-class="nav__link-item-active">Home</router-link>
            <router-link :to="{name: 'About'}" class="nav__link-item" active-class="nav__link-item-active">O mnie</router-link>
            <router-link :to="{name: 'Contact'}" class="nav__link-item" active-class="nav__link-item-active">Kontakt</router-link>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({})

</script>


<style scoped lang="scss">
.nav {
    &__container {
        background-color: #feffff;
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 1rem;
    }
    &__logo {
        &-image{
            display: inline-block;
            & img{
                height: 75px;
                @media screen and (min-width: 540px) {
                    height: 100px;
                }
            }
        }
        &-text {
            display: none;
            @media screen and (min-width: 900px) {
                display: inline-block;
            }
            &-title {
                font-size: 2rem;
            }
            &-subtitle {}
        }
    }
    &__links {
        display: flex;
        font-size: 1rem;
        @media screen and (min-width: 540px) {
            font-size: 1.5rem;
        }
    }

    &__link-item {
        font-weight: 500;
        text-transform: uppercase;
        padding: 1.5rem 0.6rem;
        @media screen and (min-width: 520px) {
            padding: 2rem 1rem;
        }
        @media screen and (min-width: 635px) {
            padding: 2rem;
        }
        text-decoration: none;
        color: #b8aaa5;
        &-active{
            color: #c88b79;
        }

    }
}
</style>
