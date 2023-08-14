<template>
  <div class="welcome">
    <h1 class="welcome__title">Przekonaj się do ubezpieczeń</h1>
    <img
      src="../assets/images/portret.jpg"
      alt="portret"
      class="welcome__photo"
    />
    <div class="welcome__text">
      <p>
        Życie nauczyło mnie, jak bardzo istotna jest pomoc drugiego człowieka,
        szczególnie w sytuacjach kryzysowych. Dlatego też moja ścieżka zawodowa
        poprowadziła mnie w kierunku doradztwa ubezpieczeniowego. Opierając się
        na zaufaniu pomagam moim klientom podejmować decyzje dotyczące
        zabezpieczenia przyszłości swojej i najbliższych. Mam świadomość, że
        potrzeby każdego człowieka są zróżnicowane, ale łączy nas jedno - chcemy
        czuć się bezpiecznie.
      </p>
      <p>
        Indywidualnie dopasowane rozwiązania mogą uratować finanse w sytuacjach
        losowych. Nie pozwól, aby ktoś decydował za Ciebie, weź sprawy w swoje
        ręce, a ja wskażę Ci możliwości.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // props: {
  //     servicesSectionElement: {type: HTMLElement, required: true}
  // },
  setup(props) {
    const viewPortHeight = `${800 - 130}px`;
    const scrollDown = () => {
      // props.servicesSectionElement.scrollIntoView({behavior: "smooth"});
    };
    return {
      viewPortHeight,
      scrollDown,
    };
  },
});
</script>
<style lang="scss">
.welcome {
  display: grid;
  grid-template-areas: "header" "text" "photo";
  grid-template-columns: 1fr;
  @media screen and (min-width: 800px) {
    grid-template-areas: "header photo" "text photo";
    grid-template-columns: 2fr 1fr;
  }
  border-radius: 100%;
  margin: 3rem auto 0;
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
}
</style>
