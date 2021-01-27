<template>
  <div class="row">
    <div class="col-12 p-0">
      <div class="banner mt-5" :id="item.category.link">
        <img :src="item.category.banner" :alt="item.category.name" />
      </div>
    </div>
    <div class="col-12">
      <div class="row px-3 px-md-5">
        <div
          class="col-md-4 col-lg-2 mt-4"
          v-for="product in item.products"
          :key="`${item.id}_${product.id}`"
          :product="product"
        >
          <div class="product">
            <router-link :to="{ name: 'shop.product' }">
              <img
                class="w-100 mx-auto"
                style="object-fit: cover"
                :src="product.img"
                :alt="product.name"
              />
              <!-- <router-link> -->
              <p class="product-name">
                {{ product.name }}
              </p>
              <!-- </router-link> -->
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopProducts",
  props: ["item"],
};
</script>

<style>
.product-name {
  background: #353592;
  margin-bottom: 0;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.1em;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.product li a {
  text-decoration: none;
}
</style>
