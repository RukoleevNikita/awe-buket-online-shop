import { create } from 'zustand';

export const useStore = create(set => ({
  bears: 0,
  increaseBears: () => set(state => ({ bears: state.bears + 1 })),
  decreaseBears: () => set(state => ({ bears: state.bears - 1 })),
}));
