<template>
  <button :class="`btn btn-${type}`" @click="onClick">
    <slot></slot>
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
    }
  },
  emits: ['click'],
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
}
</style>
