import { Card } from '@/data/cards';
import { create } from 'zustand';

type CartStore = {
  selectedCard: Card | null;
  setSelectedCard: (card: Card | null) => void;
};

const useCartStore = create<CartStore>((set) => ({
  selectedCard: null, 
  setSelectedCard: (card: Card | null) => set({ selectedCard: card }),
}));

export default useCartStore;
