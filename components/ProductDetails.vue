<script setup>
import { CheckOutlined } from "@ant-design/icons-vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Object,
    required: true,
  },
});

useHead({
  title: props.title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: props.description,
    },
  ],
});
</script>

<template>
  <a-row :gutter="24" class="container">
    <a-col :xs="24" :lg="12">
      <a-typography-title class="product-title">{{ title }}</a-typography-title>
      <a-row align="middle" :span="24" style="margin-top: 20px">
        <a-col>
          <a-typography-title :level="2" class="product-price"
            >${{ price }}</a-typography-title
          >
        </a-col>
        <a-divider type="vertical" class="divider" />
        <a-col>
          <span>
            <a-rate v-model:value="rating.rate" allow-half disabled />
            <a-typography-text type="secondary" style="margin-left: 8px">
              {{ rating.count }} reviews
            </a-typography-text>
          </span>
        </a-col>
      </a-row>
      <a-typography-paragraph
        :content="description"
        class="product-description"
        style="margin-top: 16px"
      />
      <a-row align="middle" class="product-status">
        <a-col>
          <check-outlined class="status-icon" />
        </a-col>
        <a-col>
          <a-typography-text class="status-text"
            >In stock and ready to ship
          </a-typography-text>
        </a-col>
      </a-row>
    </a-col>
    <a-col :xs="24" :lg="12" class="product-image">
      <client-only>
        <a-image
          :alt="title"
          :src="image"
          height="500px"
          width="100%"
          style="object-fit: cover"
        />
      </client-only>
    </a-col>
  </a-row>
</template>

<style lang="css" scoped>
.container {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.product-title {
  margin: 0;
  font-size: 30px;
}

.divider {
  height: 32px;
}

.product-price {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}

.product-description {
  margin-top: 16px;
  color: #6b7280;
  font-size: 16px;
}

.product-status {
  margin-top: 16px;
}

.status-icon {
  color: #10b981;
  font-size: 20px;
}

.status-text {
  margin-left: 12px;
  color: #6b7280;
}

.product-image {
  margin-top: 24px;
}

@media (min-width: 1024px) {
  .container {
    padding: 24px;
    flex-direction: row-reverse;
  }

  .product-title {
    font-size: 36px;
  }

  .product-price {
    font-size: 20px;
  }

  .product-image {
    margin-top: 0;
  }
}
</style>
