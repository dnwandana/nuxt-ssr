<script setup>
const route = useRoute();
const productId = route.params.id;

const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${productId}`
);

useSeoHead(product.title, product.description, product.image, product.id);
</script>

<template>
  <product-details
    :title="product.title"
    :price="product.price"
    :description="product.description"
    :image="product.image"
    :rating="product.rating"
  />
</template>
