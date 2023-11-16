<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <h1 class="mb-4 text-center">Jogo Confirmado!</h1>
      <p class="text-center mb-5 lead">Confira seus números abaixo e boa sorte!</p>

      <div class="card shadow-lg mb-5">
        <div class="card-body">
          <h2 class="card-title h4 mb-3">Detalhes do Jogo:</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Jogo: <strong>{{ gameName }}</strong></li>
            <li class="list-group-item">Quantidade de Números Selecionados: <strong>{{ selectedCount }}</strong></li>
            <li class="list-group-item">Números Selecionados: <strong>{{ selectedNumbers.join(', ') }}</strong></li>
            <li class="list-group-item">
              <strong>Valor Total:</strong>
              <span class="fw-bold text-primary"> R$ {{ totalPrice.toFixed(2) }}</span>
            </li>            
          </ul>
        </div>
      </div>
      <div class="text-center">
        <router-link class="btn btn-success btn-lg" to="/sena">Novo jogo Sena</router-link>
        <router-link class="btn btn-success btn-lg ms-3" to="/quina">Novo Jogo Quina</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '../components/common/Navbar.vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Payment',
  components: {
    Navbar
  },
  props: {
    selectedNumbers: {
      type: Array as PropType<number[]>,
      required: true
    },
    totalPrice: {
      type: Number as PropType<number>,
      required: true
    },
    selectedCount: {
      type: Number as PropType<number>,
      required: true
    },
    gameName: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
  .list-group-item {
    background-color: #f8f9fa;
  }

  .btn-lg {
    padding: 0.75rem 1.25rem;
  }

  .text-primary {
    color: #007BFF;
    font-size: 1.25rem;
  }
</style>
