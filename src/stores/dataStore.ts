import { defineStore } from "pinia";
import axios, { AxiosResponse } from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

// Define the store
export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    showModal: false,
    selectedProduct: null as Product | null,
  }),

  actions: {
    async fetchProducts(): Promise<void> {
      try {
        const response: AxiosResponse<Product[]> = await axios.get<Product[]>(
          "https://fakestoreapi.com/products/category/electronics?limit=6",
        );
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    openModal(product: Product) {
      this.showModal = true;
      this.selectedProduct = product;
    },

    closeModal() {
      this.showModal = false;
      this.selectedProduct = null;
    },
  },
});
