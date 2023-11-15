<template>
  <div class="sena">
    <h1>Jogo da Sena</h1>
    <NumberSelector v-model="selectedNumbers" />
    <PriceDisplay :numbers="selectedNumbers" />
    <Button text="Confirmar" @click="confirmSelection" />
    <!-- Mensagens ou instruções adicionais aqui -->
  </div>
</template>

<script lang="ts">
import NumberSelector from './components/lottery/NumberSelector.vue';
import PriceDisplay from '@/components/lottery/PriceDisplay.vue';
import Button from '@/components/common/Button.vue';
import { ref } from 'vue';

export default {
  name: 'Sena',
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
.sena {
  /* Estilos específicos para Sena */
}
</style>
