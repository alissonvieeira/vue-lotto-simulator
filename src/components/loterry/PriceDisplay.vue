<template>
  <div class="price-display">
    <p>Preço: R$</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'PriceDisplay',
  props: {
    numbers: {
      type: Array as () => number[],
      required: true
    }
  },
  setup(props) {
    const calculatePrice = computed(() => {
      return props.numbers.length * 2; // Exemplo: R$2 por número
    });

    return { calculatePrice };
  }
});
</script>
