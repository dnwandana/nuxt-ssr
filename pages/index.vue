<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<template>
  <main style="min-height: 100vh">
    <a-row :gutter="16">
      <a-col
        :span="6"
        style="padding: 16px"
        v-for="product in products"
        :key="product.id"
      >
        <product-card
          :id="product.id"
          :image="product.image"
          :title="product.title"
          :description="product.description"
        />
      </a-col>
    </a-row>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
