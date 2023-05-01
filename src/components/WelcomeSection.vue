<template>
    <div class="welcome">
        <h1 class="welcome__title">Przekonaj się do ubezpieczeń</h1>
        <img src="../assets/images/portret.jpg" alt="portret" class="welcome__photo" />
        <div class="welcome__text">
            <p>
                Życie nauczyło mnie, jak bardzo istotna jest pomoc drugiego człowieka, szczególnie w sytuacjach
                kryzysowych.
                Dlatego też moja ścieżka zawodowa poprowadziła mnie w kierunku doradztwa ubezpieczeniowego.
                Opierając się na zaufaniu pomagam moim klientom podejmować decyzje dotyczące zabezpieczenia przyszłości
                swojej i najbliższych. Mam świadomość, że potrzeby każdego człowieka są zróżnicowane, ale łączy nas
                jedno -
                chcemy czuć się bezpiecznie.

            </p>
            <p>
                Indywidualnie dopasowane rozwiązania mogą uratować finanse w sytuacjach losowych. Nie pozwól, aby ktoś
                decydował za Ciebie, weź sprawy w swoje ręce, a ja wskażę Ci możliwości.
            </p>
        </div>
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
    display: grid;
    grid-template-areas: 'header' 'text' 'photo' 'icon';
    grid-template-columns: 1fr;
    @media screen and (min-width: 800px) {
        grid-template-areas: 'header photo' 'text photo' 'icon photo';
        grid-template-columns: 2fr 1fr;
    }
    margin: 3rem auto;
    max-width: 1400px;
    &__title {
        margin-top: 0;
        grid-area: header;
        font-size: 2.3rem;
        @media screen and (min-width: 460px) {
            font-size: 3rem;
        }
        @media screen and (min-width: 800px) {
            margin-right: 2rem;
        }
        @media screen and (min-width: 1100px) {
            font-size: 4rem;
            margin-right: 3rem;
        }
    }
    &__photo {
        grid-area: photo;
        width: 100%;
    }
    &__text {
        grid-area: text;
        font-size: 1.3rem;
        line-height: 130%;
        text-align: justify;
        font-style: italic;
        margin-bottom: 2rem;
        @media screen and (min-width: 800px) {
            margin-right: 2rem;
            margin-bottom: 0;
            font-size: 1.5rem;
        }
        @media screen and (min-width: 1100px) {
            margin-right: 3rem;
        }
    }
    &__icon {
        grid-area: icon;
        text-align: center;
        margin-top: 2rem;
        @media screen and (min-width: 800px) {
            margin-top: 0;
        }
        & img {
            width: 3rem;
            @media screen and (min-width: 1100px) {
                width: 4rem;
            }
        }
    }
}
</style>