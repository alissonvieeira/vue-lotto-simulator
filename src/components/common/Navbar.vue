<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container">
      <router-link class="navbar-brand" to="/">Loterias Umov.me</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/sena">Sena</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/quina">Quina</router-link>
          </li>
          <!-- Mais itens de navegação -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  // Script existente
</script>

<style scoped>
.navbar-custom {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .navbar-brand {
    font-size: 1.6rem;
    font-weight: bold;
    color: #007bff;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }

  .navbar-toggler {
    border: none;
    &:focus {
      box-shadow: none;
    }

    .navbar-toggler-icon {
      background-image: url('path/to/custom-icon.svg'); /* Substitua pelo caminho do seu ícone personalizado */
    }
  }

  .nav-link {
    font-size: 1.1rem;
    color: #343a40;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }

  .nav-item {
    margin-right: 1.5rem;
  }
}
</style>
