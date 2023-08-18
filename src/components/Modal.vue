<template>
	<teleport to="body">
		<div
			v-if="showModal"
			class="fixed inset-0 flex items-center justify-center z-50">
			<div class="bg-black p-6 w-96 text-center border-8 border-indigo-500">
				<h2 class="text-2xl text-white mb-4">Description</h2>
				<p class="text-sm mt-2 mb-4 text-slate-400">
					{{ product.description }}
				</p>
				<div class="inline-block mr-16">
					<h1 class="text-white text-xl mt-4 mb-2">Category</h1>
					<p class="mb-2 text-cyan-400">{{ product.category }}</p>
				</div>
				<div class="inline-block ml-8">
					<h2 class="text-white text-xl mt-4 mb-2">Rating</h2>
					<p class="mb-2 text-cyan-400">{{ product.rating.rate }}</p>
				</div>

				<button
					@click="closeModal"
					class="text-red-500 m-auto text-xl flex mt-8">
					X
				</button>
			</div>
		</div>
	</teleport>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import { useProductStore } from "../stores/dataStore";

	const { product } = defineProps(["product"]);

	const showModal = ref(true);

	const closeModal = () => emits("close");

	const emits = defineEmits(["close"]);

	const { products, selectedProduct } = useProductStore();
	// const closeModal = () => useProductStore().closeModal();
</script>
