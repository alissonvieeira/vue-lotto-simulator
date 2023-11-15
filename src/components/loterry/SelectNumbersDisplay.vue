<template>
  <div class="row mb-3">
    <div class="col-12 text-center">
      <span v-if="numbers.length > 0">Números escolhidos:</span>
    </div>
  </div>
  <div class="selected-numbers">    
    <span v-for="number in numbers" :key="number" class="selected-number">      
      {{ number }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SelectedNumbersDisplay',
  props: {
    numbers: {
      type: Array as PropType<number[]>,
      required: true
    }
  }
});
</script>

<style scoped>
.selected-numbers {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.selected-number {
  background-color: #01AC66;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
}
</style>
