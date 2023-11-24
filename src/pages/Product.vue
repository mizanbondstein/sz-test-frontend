<template>
  <div>
    <h2 style="text-align: center">Product List</h2>
    <div class="table-container">
      <table class="product-table">
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/products"
        );
        this.products = response.data.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */

.table-container {
  max-width: 800px;
  margin: auto;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.product-table th,
.product-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.product-table th {
  background-color: #f2f2f2;
}

.product-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>