<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a-card hoverable>
    <template #cover>
      <client-only>
        <a-image
          :alt="title"
          :src="image"
          height="250px"
          width="100%"
          style="object-fit: cover"
        />
      </client-only>
    </template>
    <a-card-meta>
      <template #title>
        <nuxt-link :to="`/product/${id}`">
          <a-typography-text>
            {{ title }}
          </a-typography-text>
        </nuxt-link>
      </template>
      <template #description>
        <client-only>
          <a-typography-paragraph
            type="secondary"
            :ellipsis="{
              rows: 3,
              expandable: false,
            }"
            :content="description"
          />
        </client-only>
      </template>
    </a-card-meta>
  </a-card>
</template>
