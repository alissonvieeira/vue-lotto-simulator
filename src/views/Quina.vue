<template>
  <div class="quina">
    <h1>Jogo da Quina</h1>
    <NumberSelector v-model="selectedNumbers" />
    <PriceDisplay :numbers="selectedNumbers" />
    <Button text="Confirmar" @click="confirmSelection" />
    <!-- Mensagens ou instruções adicionais aqui -->
  </div>
</template>

<script lang="ts">
import NumberSelector from '../components/loterry/NumberSelector.vue';
import PriceDisplay from '../components/loterry/PriceDisplay.vue';
import Button from '../components/common/Button.vue';


export default {
  name: 'Quina',
  components: {
    NumberSelector,
    PriceDisplay,
    Button
  },
  setup() {
    const selectedNumbers = ref([]);

    const confirmSelection = () => {
      // Lógica de confirmação aqui
    };

    return { selectedNumbers, confirmSelection };
  }
};
</script>

<style scoped>
.quina {
  /* Estilos específicos para Quina */
}
</style>
