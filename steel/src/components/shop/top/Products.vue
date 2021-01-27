<template>
  <div class="col-md-4 px-md-4">
    <div class="top-product mt-5 font-weight-bold text-center">
      <p class="use mb-0">Posibles usos: {{ item.uses }}</p>
      <p class="name mb-0">{{ item.product.name }}</p>
      <div class="colors flex-center mb-2">
        <p class="mb-0 font-size-normal">Colores:</p>
        <span v-if="item.product.colors.length === 0">No aplica</span>
        <div class="d-flex" v-else>
          <div
            class="color mr-1"
            v-for="(color, index) in item.product.colors"
            :key="`color_${item.product.name}_${index}`"
            :item="color"
            :style="{ background: color }"
          ></div>
        </div>
      </div>
      <router-link :to="{ name: 'shop.product' }">
        <img
          class="mb-4"
          style="object-fit: cover"
          :src="item.product.img"
          :alt="item.product.name"
        />
        <div class="properties">
          <p class="material mb-0">
            {{ item.product.material }}
          </p>
          <p class="capacity mb-0">Capacidad: {{ item.product.capacity }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopTopProducts",
  props: ["item"],
};
</script>

<style>
.colors {
  color: black;
}
.top-product .use {
  font-size: 2em;
  color: black;
  line-height: 1.2em;
}

.top-product .name {
  color: #07237d;
  margin-top: 10px;
  font-size: 1.7em;
}
.top-product .properties {
  color: #557fae;
  font-size: 1.3em;
}

.top-product .colors .color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.top-product a,
.top-product a:hover {
  text-decoration: none;
}
</style>
