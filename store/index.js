import { getProduct, getCollection } from '@/services/index';
import { create } from 'zustand';

const BASE_URL = 'http://localhost:3000/api';
export const useStore = create()(set => ({
  product: [],
  productCollection: [],
  loading: false,
  getProductCollection: async (key, category) => {
    set({ loading: true });
    let productCollection = [];
    let req;
    switch (key) {
    case 'collection':
      req = await fetch(`${BASE_URL}/${key}/${category}`);
      productCollection = await req.json();
      break;
    case 'occasion':
      req = await fetch(`${BASE_URL}/${key}/${category}`);
      productCollection = await req.json();
      break;
    default: null;
    }
    set({ productCollection, loading: false });
  },
  getProduct: async path => {
    let product = [];
    let req;
    set({ loading: true });
    req = await fetch(`${BASE_URL}/${path}`);
    product = await req.json();
    set({ product, loading: false });
    return product;
  }
}));

