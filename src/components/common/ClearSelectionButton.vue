<template>
  <button class="btn btn-warning btn-sm" @click="emitClear">Limpar Seleção</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClearSelectionButton',
  emits: ['clear'],
  setup(_, { emit }) {
    const clearSelection = () => {
      emit('clear');
    };

    return { clearSelection };
  }
});
</script>

<style scoped>

</style>
