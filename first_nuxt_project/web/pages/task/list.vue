<template>
  <div>
    <h1>Task List:</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="`/task/id/${product.id}`">
          {{ product.name }} (ID: {{ product.id }})
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" },
        { id: 5, name: "Product 5" },
      ],
    };
  },
};
</script>
