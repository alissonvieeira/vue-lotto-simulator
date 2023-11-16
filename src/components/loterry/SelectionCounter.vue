<template>
  <div class="selection-counter card">
    <div class="card-body">
      <h5 class="card-title">Números Selecionados</h5>
      <p class="card-text">{{ count }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SelectionCounter',
  props: {
    count: {
      type: Number,
      required: true
    }
  }
});
</script>

<style scoped>

</style>
