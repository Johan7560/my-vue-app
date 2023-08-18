<template>
	<div
		v-for="product in products"
		:key="product.id"
		@click="openModal(product)">
		<div :class="'product-container p-3 rounded-lg shadow-md'">
			<h2 class="font-bold mb-2 text-black">{{ product.title }}</h2>
			<p class="mb-4 text-slate-500">${{ product.price }}</p>
			<img
				:src="product.image"
				alt="Product Image"
				:class="'w-full h-40 object-contain rounded-lg'" />
			<button
				type="button"
				class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
				@click="openModal(product)">
				View Details
			</button>
		</div>
		<teleport to="body">
			<ProductModal
				:product="selectedProduct"
				v-if="showModal"
				@close="closeModal" />
		</teleport>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import { useProductStore } from "../stores/dataStore";
	import ProductModal from "./Modal.vue";

	interface Product {
		id: number;
		title: string;
		price: number;
		image: string;
	}

	const productStore = useProductStore();
	const products = ref<Product[]>([]);

	onMounted(async () => {
		await productStore.fetchProducts();
		products.value = productStore.products;
	});

	const showModal = ref(false);
	const selectedProduct = ref<Product | null>(null);

	const openModal = (product: Product) => {
		selectedProduct.value = product;
		showModal.value = true;
	};

	const closeModal = () => {
		showModal.value = false;
		selectedProduct.value = null;
	};

	// const openModal = (product: Product) => useProductStore().openModal(product);
</script>

<style scoped>
	.product-container {
		height: 350px;
		background-color: rgb(255, 255, 255);
	}
</style>
