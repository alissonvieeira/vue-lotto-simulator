<template>
  <div class="number-selector">
    <button
      v-for="num in 60"
      :key="num"
      :class="{ 'selected': selectedNumbers.includes(num) }"
      @click="toggleNumber(num)"
    >
      {{ num }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'NumberSelector',
  props: {
    maxSelection: {
      type: Number,
      default: 6
    }
  },
  setup(props, { emit }) {
    const selectedNumbers = ref([]);

    const toggleNumber = (num) => {
      if (selectedNumbers.value.includes(num)) {
        selectedNumbers.value = selectedNumbers.value.filter(n => n !== num);
      } else if (selectedNumbers.value.length < props.maxSelection) {
        selectedNumbers.value.push(num);
      }
      emit('update:selectedNumbers', selectedNumbers.value);
    };

    return { selectedNumbers, toggleNumber };
  }
});
</script>

<style scoped>
.number-selector button {
  /* Estilos básicos para botões */
}
.number-selector .selected {
  /* Estilos para números selecionados */
}
</style>
