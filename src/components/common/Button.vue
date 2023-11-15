<template>
  <button :class="['btn', `btn-${type}`]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, emit } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
});
</script>

<style scoped>
.btn {
  /* Estilos básicos para botões */
}
.btn-primary {
  /* Estilos para botão primário */
}
.btn-secondary {
  /* Estilos para botão secundário */
}
</style>
