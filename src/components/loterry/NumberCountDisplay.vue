<template>
  <div class="card number-count-display">
    <div class="card-body">
      <h5 class="card-title">Números Selecionados</h5>
      <p class="card-text">{{ count }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'NumberCountDisplay',
  props: {
    count: {
      type: Number as PropType<number>,
      required: true
    }
  }
});
</script>

<style scoped>
.number-count-display {
  margin-top: 20px;
  text-align: center;
}

.card-title {
  color: #007bff;
}

.card-text {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
