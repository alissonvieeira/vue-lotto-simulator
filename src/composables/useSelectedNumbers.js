import { ref } from 'vue';

export default function useSelectedNumbers() {
  const selectedNumbers = ref([]);

  const clearSelectedNumbers = () => {
    selectedNumbers.value = [];
  };

  return { selectedNumbers, clearSelectedNumbers };
}
