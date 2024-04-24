import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: [
    {
      image: '',
      label: 'Black Winter...',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 5000
    },
    {
      image: '',
      label: 'Black Winter...',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 5000
    },
    {
      image: '',
      label: 'Black Winter...',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 5000
    }
  ],
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [item, ...state.cart] })),
}))

export default useProductStore;