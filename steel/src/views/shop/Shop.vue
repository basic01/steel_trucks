<template>
  <div class="container-fluid">
    <div class="row px-3 px-md-5 mt-5 mb-4">
      <div class="col-12">
        <h2 class="main-header text-center">
          “Siempre listos para exceder sus expectativas”
        </h2>
      </div>
      <ShopCategory
        v-for="category in allCategories"
        :key="category.name"
        :category="category"
      />
    </div>

    <ShopProducts
      v-for="(item, index) in category_products"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import ShopCategory from "../../components/shop/ShopCategory";
import ShopProducts from "../../components/shop/ShopProducts";
import { mapGetters } from "vuex";
export default {
  name: "ShopMain",
  data() {
    return {
      category_products: [],
    };
  },
  components: {
    ShopCategory,
    ShopProducts,
  },
  computed: {
    ...mapGetters("shop", ["allCategories", "allProducts"]),
  },
  mounted() {
    for (let category of this.allCategories) {
      this.category_products.push({
        category,
        products: this.allProducts.filter((p) => p.category === category.id),
      });
    }
  },
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
</style>
