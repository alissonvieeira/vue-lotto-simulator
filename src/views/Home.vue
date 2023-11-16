<template>
  <div class="home">
    <Navbar />

    <div class="container my-5">
      <h1 class="text-center mb-5">Explore Nossos Jogos</h1>
      <div class="row g-4">
        <!-- Cartão Sena -->
        <div class="col-md-6">
          <div class="game-card sena-card">
            <div class="card-content">
              <h2>Jogar Sena</h2>
              <p>Participe do Jogo da Sena e concorra a prêmios incríveis!</p>
              <router-link to="/sena" class="btn btn-outline-light">Jogar Agora</router-link>
            </div>
          </div>
        </div>

        <!-- Cartão Quina -->
        <div class="col-md-6">
          <div class="game-card quina-card">
            <div class="card-content">
              <h2>Jogar Quina</h2>
              <p>Tente a sorte na Quina e ganhe prêmios em dinheiro!</p>
              <router-link to="/quina" class="btn btn-outline-light">Jogar Agora</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>    
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
  .game-card {
    border-radius: 1.2rem;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    }

    .card-content {
      padding: 2.5rem;
      text-align: center;
      transition: background-color 0.3s ease;

      h2 {
        font-size: 2.2rem;
        margin-bottom: 1.2rem;
      }

      p {
        font-size: 1.3rem;
        margin-bottom: 1.7rem;
      }

      .btn {
        font-size: 1.3rem;
        padding: 0.9rem 1.7rem;
        border-radius: 0.7rem;
        transition: all 0.3s ease;

        &:hover {
          background-color: #fff;
          color: #000;
          transform: scale(1.05);
        }
      }
    }
  }

  .sena-card {
    background: linear-gradient(145deg, #009bff, #0062cc);
  }

  .quina-card {
    background: linear-gradient(145deg, #2ecc71, #1e8449);
  }
</style>