<template>
    <nav class="nav__container">
        <div class="nav__logo">
            <div class="nav__logo-image">
                <img src="../assets/images/olga_logo.png" height="100px" alt="logo" />
            </div>
            <div class="nav__logo-text">
                <div class="nav__logo-text-title">Olga Kiraga</div>
                <div class="nav__logo-text-subtitle">Specjalista ds. Ubezpieczeń i Inwestycji</div>
            </div>
        </div>
        <div class="nav__links">
            <router-link :to="{name: 'Home'}" class="nav__link-item">Home</router-link>
            <router-link :to="{name: 'About'}" class="nav__link-item">O mnie</router-link>
            <router-link :to="{name: 'Contact'}" class="nav__link-item">Kontakt</router-link>
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
        display: flex;
        justify-content: space-between;
    }
    &__logo {
        &-image{
            display: inline-block;
        }
        &-text {
            display: inline-block;
            &-title {
                font-size: 2rem;
            }
            &-subtitle {}
        }
    }
    &__links {
        display: flex;
        font-size: 1.6rem;
    }

    &__link-item {
        font-weight: 500;
        text-transform: uppercase;
        padding: 2rem;
    }
}
</style>
