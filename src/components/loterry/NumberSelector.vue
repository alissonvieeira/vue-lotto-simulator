<template>
  <div class="number-selector">
    <button
      v-for="number in totalNumbers"
      :key="number"
      :class="['btn', isSelected(number) ? 'btn-success' : 'btn-outline-secondary']"
      @click="toggleNumber(number)"
    >
      {{ number }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
    const isSelected = (number: number) => props.selectedNumbers.includes(number);

    const toggleNumber = (number: number) => {
      let newNumbers = [...props.selectedNumbers];
      if (isSelected(number)) {
        newNumbers = newNumbers.filter(n => n !== number);
      } else {
        newNumbers.push(number);
      }
      emit('update:selectedNumbers', newNumbers);
    };

    return { isSelected, toggleNumber };
  }
});
</script>

<style scoped>
.number-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  .btn {
    margin-bottom: 0.5rem;
  }
}
</style>
