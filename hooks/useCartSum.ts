import { create } from 'zustand';

type CartSum = {
  sum: number;
  updateSum: (quantity: number, price: number) => void;
};

const useCartSum = create<CartSum>((set) => ({
  sum: 0,
  updateSum: (quantity, price) =>{
    set({ sum: 0 })
    set((state) => ({ sum: state.sum + quantity * price }))
  } 
}));

export default useCartSum;
