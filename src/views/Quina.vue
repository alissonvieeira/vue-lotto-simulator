<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <h1 class="text-center mb-2">Jogo da Quina</h1>
      <p class="text-center mb-4">Selecione no mínimo <strong>5</strong> e no máximo <strong>15</strong> números para poder efetivar o jogo.</p>
      <NumberSelector
        :selectedNumbers="selectedNumbers"
        @update:selectedNumbers="selectedNumbersUpdated"
        class="mb-4"
        :maxNumbers="15"
      />

      <div class="row">
        <div class="col-12">
          <SelectedNumbersDisplay :numbers="sortedNumbers" class="mb-4" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <NumberCountDisplay :count="sortedNumbers.length" />
        </div>
        <div class="col-12 col-md-6">
          <PriceDisplay :price="calculatePrice()" class="mb-3" />
        </div>
        <div class="col-12">          
          <Button :disabled="sortedNumbers.length < 5 || sortedNumbers.length > 15" type="primary" @click="confirmSelection" class="btn btn-lg btn-block btn-success">Confirmar Aposta</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '../components/common/Navbar.vue';
import NumberCountDisplay from '../components/loterry/NumberCountDisplay.vue';
import NumberSelector from '../components/loterry/NumberSelector.vue';
import SelectedNumbersDisplay from '../components/loterry/SelectNumbersDisplay.vue';
import ClearSelectionButton from '../components/common/ClearSelectionButton.vue';
import PriceDisplay from '../components/loterry/PriceDisplay.vue';
import Button from '../components/common/Button.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Quina',
  components: {
    Navbar,
    NumberCountDisplay,
    NumberSelector,
    SelectedNumbersDisplay,
    ClearSelectionButton,
    PriceDisplay,
    Button
  },
  setup() {
    const selectedNumbers = ref<number[]>([]);
    const sortedNumbers = computed(() => selectedNumbers.value.sort((a, b) => a - b));
    const router = useRouter();

    const priceTable: { [key: number]: number } = {
      5: 2.00,
      6: 12.00,
      7: 42.00,
      8: 112.00,
      9: 252.00,
      10: 504.00,
      11: 924.00,
      12: 1584.00,
      13: 2574.00,
      14: 4004.00,
      15: 6006.00
    };

    const calculatePrice = () => priceTable[sortedNumbers.value.length] || 0;

    const selectedNumbersUpdated = (numbers: number[]) => {
      selectedNumbers.value = numbers;
    };

    const selectedCount = computed(() => sortedNumbers.value.length);

    const confirmSelection = () => {
      if (sortedNumbers.value.length >= 5 && sortedNumbers.value.length <= 15) {
        router.push({
          path: '/payment',
          query: {
            numbers: sortedNumbers.value.join(','),
            totalPrice: calculatePrice(),
            selectedCount: selectedCount.value,
            gameName: 'Quina'
          }
        });
      } else {
        if (sortedNumbers.value.length < 5) {
          alert('Selecione pelo menos 5 números.');
        } else if (sortedNumbers.value.length > 15) {
          alert('Você selecionou mais de 15 números. Selecione no máximo 15 números.');
        }
      }
    };

    const clearSelectedNumbers = () => {
      selectedNumbers.value = [];
    };

    return { selectedNumbers, clearSelectedNumbers, sortedNumbers, calculatePrice, confirmSelection, selectedNumbersUpdated };
  }
};
</script>

<style scoped>
  .info-cards {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }

  .btn-lg.btn-block {
    width: 100%;
    padding: 10px 20px;
    font-size: 1.2em;
  }
</style>
