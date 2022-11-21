<template>
    <div class="about">
        <div class="about__image">
            <img src="../assets/images/portret.jpg" alt="portret" :height="viewPortHeight" />
        </div>
        <div class="about__text">
            <p>
                Życie nauczyło mnie, jak bardzo istotna jest pomoc drugiego człowieka, szczególnie w sytuacjach kryzysowych.
                Dlatego też moja ścieżka zawodowa poprowadziła mnie w kierunku doradztwa ubezpieczeniowego.
                Opierając się na zaufaniu pomagam moim klientom podejmować decyzje dotyczące zabezpieczenia przyszłości
                swojej i najbliższych. Mam świadomość, że potrzeby każdego człowieka są zróżnicowane, ale łączy nas jedno -
                chcemy czuć się bezpiecznie.
    
            </p>
            <p> 
                Indywidualnie dopasowane rozwiązania mogą uratować finanse w sytuacjach losowych. Nie pozwól, aby ktoś
                decydował za Ciebie, weź sprawy w swoje ręce, a ja wskażę Ci możliwości.
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const viewPortHeight = window.innerHeight - 130
        return {
            viewPortHeight
        }
    }
})
</script>
<style lang="scss">
.about {
    display: flex;

    &__text {
        font-weight: 300;
        font-style: italic;
        font-size: 1.5rem;
        padding-left: 3rem;
        padding-right: 4rem;
        line-height: 3rem;
    }

}
</style>