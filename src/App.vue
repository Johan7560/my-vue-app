<template>
	<!-- Still need to code in the router for routing -->
	<!-- <div>
		<router-link to="/">Home</router-link>
		<router-link to="/cart">Cart</router-link>
		<router-view></router-view>
	</div> -->
	<div :class="'grid grid-cols-3 grid-rows-2 gap-7'">
		<ProductContainer />
	</div>
</template>

<script setup lang="ts">
	import ProductContainer from "./components/Products.vue";
</script>
