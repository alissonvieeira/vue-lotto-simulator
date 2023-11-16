<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <h1 class="text-center mb-2">Jogo da Sena</h1>
      <p class="text-center mb-4">Selecione no mínimo <strong>6</strong> e no máximo <strong>15</strong> números para poder efetivar o jogo.</p>
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
          <Button :disabled="sortedNumbers.length < 6 || sortedNumbers.length > 15" type="primary" @click="confirmSelection" class="btn btn-lg btn-block btn-success">Confirmar Aposta</Button>
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
import PriceDisplay from '../components/loterry/PriceDisplay.vue';
import Button from '../components/common/Button.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter from vue-router

export default {
  name: 'Sena',
  components: {
    Navbar,
    NumberCountDisplay,
    NumberSelector,
    SelectedNumbersDisplay,    
    PriceDisplay,
    Button
  },
  setup() {
    const selectedNumbers = ref<number[]>([]);
    const sortedNumbers = computed(() => selectedNumbers.value.sort((a, b) => a - b));
    const router = useRouter();

    const priceTable: { [key: number]: number } = {
      6: 4.50,
      7: 31.50,
      8: 126.00,
      9: 378.00,
      10: 945.00,
      11: 2079.00,
      12: 4158.00,
      13: 7722.00,
      14: 13513.50,
      15: 22522.50
    };

    const calculatePrice = () => priceTable[sortedNumbers.value.length] || 0;

    const selectedNumbersUpdated = (numbers: number[]) => {
      selectedNumbers.value = numbers;
    };

    const selectedCount = computed(() => sortedNumbers.value.length);

    const confirmSelection = () => {
      if (sortedNumbers.value.length >= 6 && sortedNumbers.value.length <= 15) {        
        router.push({
          path: '/payment',
          query: {
            numbers: sortedNumbers.value.join(','),
            totalPrice: calculatePrice(),
            selectedCount: selectedCount.value,
            gameName: 'Sena'
          }
        });
      } else {
        if (sortedNumbers.value.length < 6) {
          alert('Selecione pelo menos 6 números.');
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
