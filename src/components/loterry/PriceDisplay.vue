<template>
  <div class="card price-display">
    <div class="card-body">
      <h5 class="card-title">Preço do Jogo</h5>
      <p class="card-text">{{ formattedPrice }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  name: 'PriceDisplay',
  props: {
    price: {
      type: Number as PropType<number>,
      required: true
    }
  },
  setup(props) {
    const formattedPrice = computed(() => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(props.price);
    });

    return { formattedPrice };
  }
});
</script>

<style scoped>
.price-display {
  margin-top: 20px;
  text-align: center;
}

.card-title {
  color: #007bff; /* Cor do título */
}

.card-text {
  font-size: 1.2em; /* Tamanho do texto */
  font-weight: bold; /* Peso da fonte */
}
</style>
