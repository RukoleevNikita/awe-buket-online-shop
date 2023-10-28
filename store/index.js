import { getProduct, getCollection } from '@/services/index';
import { create } from 'zustand';

export const useStore = create()(set => ({
  product: [],
  collectionProduct: [],
  loading: false,
  getCollectionProducts: async () => {
    set({ loading: true });
    const posts = await getCollection();
    set({ posts, loading: false });
  },
  getProduct: async search => {
    set({ loading: true });
    const posts = await getProduct(search);
    set({ posts, loading: false });
  }
}));
