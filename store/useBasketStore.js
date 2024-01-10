import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

const BASE_URL = '/api';
const calcTotalPrice = 
  items => items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
const calcTotalCount = 
  items => items.reduce((sum, item) => sum + item.count, 0);
const useBasketStore = createWithEqualityFn(
  (set, get) => ({
    product: [],
    productCollection: [],
    cart: {
      items: [],
      totalPrice: 0,
      totalCount: 0
    },
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
        default:
          null;
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
    },
    addItem(item) {
      const { items, totalPrice, totalCount } = get().cart;
      const findItem = items.find(obj => obj._id === item._id);
      if (findItem) {
        findItem.count++;
      } else {
        items.push({
          ...item,
          count: 1
        });
      }
      const { cart } = get();
      set({
        cart: {
          items,
          totalPrice: calcTotalPrice(cart.items),
          totalCount: calcTotalCount(cart.items)
        }
      });
    },
    minusItem(id) {
      const { items, totalPrice, totalCount } = get().cart;
      const findItem = items.find(obj => obj._id === id);

      if (findItem) {
        findItem.count--;
      }

      const { cart } = get();
      set({
        cart: {
          items,
          totalPrice: calcTotalPrice(cart.items),
          totalCount: calcTotalCount(cart.items)
        }
      });
    },
    removeItem(id) {
      const { items, totalPrice, totalCount } = get().cart;
      let updatedElements = items.filter(obj => obj._id !== id);
      set({
        cart: {
          items: updatedElements,
          totalPrice: calcTotalPrice(updatedElements),
          totalCount: calcTotalCount(updatedElements)
        }
      });
    }
  }),
  shallow
);

export default useBasketStore;
