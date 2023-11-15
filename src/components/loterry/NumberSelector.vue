<template>
  <div>
    <div class="number-selector d-flex flex-wrap justify-content-center">
      <button
        v-for="number in totalNumbers"
        :key="number"
        :class="['number-button', isSelected(number) ? 'selected' : '', isDisabled(number) ? 'disabled' : '']"
        :disabled="isDisabled(number)"
        @click="toggleNumber(number)"
      >
        {{ number }}
      </button>
    </div>
    <div v-if="localSelectedNumbers.length >= MAX_SELECTION" class="max-selection-message">
      Você atingiu o limite de 15 números.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'NumberSelector',
  props: {
    selectedNumbers: {
      type: Array as () => number[],
      default: () => []
    },
    totalNumbers: {
      type: Number,
      default: 60
    }
  },
  emits: ['update:selectedNumbers'],
  setup(props, { emit }) {
    const localSelectedNumbers = ref<number[]>([...props.selectedNumbers]);
    const MAX_SELECTION = 15;

    const isSelected = (number: number) => localSelectedNumbers.value.includes(number);

    const isDisabled = (number: number) => {
      return localSelectedNumbers.value.length >= MAX_SELECTION && !isSelected(number);
    };

    const toggleNumber = (number: number) => {
      const index = localSelectedNumbers.value.indexOf(number);
      if (index >= 0) {
        localSelectedNumbers.value.splice(index, 1);
      } else if (localSelectedNumbers.value.length < MAX_SELECTION) {
        localSelectedNumbers.value.push(number);
      }
      emit('update:selectedNumbers', localSelectedNumbers.value);
    };

    return { localSelectedNumbers, isSelected, isDisabled, toggleNumber, MAX_SELECTION };
  }
});
</script>

<style scoped>
.number-selector {
  gap: 0.5rem;
}

.number-button {
  margin: 5px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background-color: #ADC0C4;
  color: white;
  border: none;
  font-weight: bold;
}

.number-button.selected {
  background-color: #01AC66;
}

.number-button.disabled {
  background-color: #F8F8FF; /* Cinza escuro para botões bloqueados */
  color: #ccc; /* Cor do texto para botões bloqueados */
}

.number-button:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.max-selection-message {
  text-align: center;
  margin-top: 10px;
  color: #d9534f; /* Cor para a mensagem de limite */
}
</style>
