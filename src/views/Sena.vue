<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <h1 class="text-center mb-4">Jogo da Sena</h1>      
      <NumberSelector 
        :selectedNumbers="selectedNumbers" 
        @update:selectedNumbers="selectedNumbersUpdated" 
        class="mb-4" 
      />
      
      <SelectedNumbersDisplay :numbers="selectedNumbers" class="mb-4" />
      <div v-if="selectedNumbers.length > 0">
        <div class="row">
          <div class="col-12 col-md-6">
            <NumberCountDisplay :count="selectedNumbers.length" />
          </div>
          <div class="col-12 col-md-6">
            <PriceDisplay :price="calculatePrice()" class="mb-3" />
          </div>
          <div class="col-12">
            <Button text="Confirmar" @click="confirmSelection" class="btn btn-lg btn-block btn-success" />
          </div>
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
    const currentGameType = ref('sena');

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

    const updateGameType = (gameType: string) => {
      currentGameType.value = gameType;      
    };

    const selectedNumbersUpdated = (numbers: number[]) => {
      selectedNumbers.value = numbers;
    };

    const confirmSelection = () => {
      if (sortedNumbers.value.length >= 6) {
        // Implementar a navegação para a rota de pagamento com o preço calculado
      } else {
        alert('Selecione pelo menos 6 números.');
      }
    };

    return { selectedNumbers, sortedNumbers, calculatePrice, confirmSelection, updateGameType, selectedNumbersUpdated };
  }
};
</script>

<style scoped>
  .info-cards {
    display: flex;
    justify-content: space-around; /* Ajusta para posicionar os cards lado a lado */
    margin-top: 20px;
  }

  .btn-lg.btn-block {
    width: 100%;
    padding: 10px 20px;
    font-size: 1.2em;
  }
</style>
