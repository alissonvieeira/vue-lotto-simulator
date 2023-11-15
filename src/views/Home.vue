<template>
  <div class="home">
    <Navbar />
    <h1>Bem-vindo ao Sistema de Loterias</h1>
    
    <div class="">

    </div>

    <div class="game-selection">
      <router-link to="/sena" class="btn btn-primary">Jogar Sena</router-link>
      <router-link to="/quina" class="btn btn-secondary">Jogar Quina</router-link>
    </div>
    <!-- Outras informações gerais aqui -->
  </div>
</template>

<script lang="ts">
import Navbar from '../components/common/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>

</style>
