<template>
  <button :class="buttonClasses" @click="onClick">
    <slot>Botão</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'>,
      default: 'primary'
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  computed: {
    buttonClasses() {
      return [
        'btn',
        `btn-${this.type}`,
        { 'rounded': this.rounded }
      ];
    }
  },
  setup(props, { emit }) {
    const onClick = () => {
      emit('click');
    };

    return { onClick };
  }
});
</script>

<style scoped>
.btn {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

.btn.rounded {
  border-radius: 9999px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-success {
  background-color: #28a745;
  color: #fff;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
}

.btn-warning {
  background-color: #ffc107;
  color: #fff;
}

.btn-info {
  background-color: #17a2b8;
  color: #fff;
}

.btn-light {
  background-color: #f8f9fa;
  color: #212529;
}

.btn-dark {
  background-color: #343a40;
  color: #fff;
}

.btn:hover {
  opacity: 0.8;
}
</style>
