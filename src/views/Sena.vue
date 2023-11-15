<template>
  <div class="container">
    <h1 class="mt-5">Jogo da Sena</h1>
    <NumberSelector v-model="selectedNumbers" />
    <div v-if="selectedNumbers.length >= 6" class="mt-4">
      <PriceDisplay :price="calculatePrice()" />
      <Button text="Confirmar" @click="confirmSelection" class="btn btn-primary mt-3" />
    </div>
    <!-- Mensagens ou instruções adicionais aqui -->
  </div>
</template>

<script lang="ts">
import NumberSelector from '../components/loterry/NumberSelector.vue';
import PriceDisplay from '../components/loterry/PriceDisplay.vue';
import Button from '../components/common/Button.vue';
import { ref, computed } from 'vue';

export default {
  name: 'Sena',
  components: {
    NumberSelector,
    PriceDisplay,
    Button
  },
  setup() {
    const selectedNumbers = ref<number[]>([]);
    const sortedNumbers = computed(() => selectedNumbers.value.sort((a, b) => a - b));

    const priceTable: { [key: number]: number } = {
      6: 4.50,
      7: 31.50,
      8: 126,
      // ... Adicione os preços restantes aqui
    };

    const calculatePrice = () => priceTable[sortedNumbers.value.length] || 0;

    const confirmSelection = () => {
      if (sortedNumbers.value.length >= 6) {
        // Implemente a navegação para a rota de pagamento com o preço calculado
      } else {
        alert('Selecione pelo menos 6 números.');
      }
    };

    return { selectedNumbers, sortedNumbers, calculatePrice, confirmSelection };
  }
};
</script>
