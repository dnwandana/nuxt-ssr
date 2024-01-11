<script lang="ts" setup>
import type { Product } from "~/types/Product";

const route = useRoute();
const productId = route.params.id;

const { data: product } = await useFetch<Product>(
  `https://fakestoreapi.com/products/${productId}`
);

useSeoHead(
  product.value.title,
  product.value.description,
  product.value.image,
  product.value.id.toString()
);
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
