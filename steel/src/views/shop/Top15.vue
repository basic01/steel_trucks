<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <div class="banner"></div>
      </div>
    </div>

    <div class="row flex-center">
      <div class="col-md-10 col-lg-9">
        <div class="product-uses my-5">
          <h3 class="third-header text-center">Usos de nuestros ganchos</h3>
          <div class="uses my-4">
            <div class="row">
              <ShopTopUses
                class="col-md-4"
                v-for="(use, index) in uses"
                :key="index"
                :use="use"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-11 col-lg-8">
        <div class="row flex-center">
          <div class="col-11 col-md-6 col-lg-5 top-products-header px-2">
            <img
              class="w-100"
              src="@/assets/logo_steel_hooks.png"
              alt="steel_hooks"
            />
          </div>
        </div>
        <div class="row">
          <ShopTopProducts
            class="col-md-4 px-md-4"
            v-for="(item, index) in allTopProducts"
            :key="`top_${index}`"
            :item="item"
          />
        </div>
      </div>

      <div class="col-11 col-md-10">
        <AccountFooter />
      </div>
    </div>
  </div>
</template>

<script>
import ShopTopUses from "../../components/shop/top/Uses";
import ShopTopProducts from "../../components/shop/top/Products";
import AccountFooter from "../../components/account/AccountFooter";
import { mapGetters } from "vuex";
export default {
  name: "ShopTop",
  components: {
    ShopTopUses,
    ShopTopProducts,
    AccountFooter,
  },
  data() {
    return {
      uses: [],
    };
  },
  computed: {
    ...mapGetters("shop", ["allProductUses", "allTopProducts"]),
  },
  mounted() {
    for (let i = 0; i < Math.ceil(this.allProductUses.length / 9); i++) {
      let data = [];
      for (let y = i * 9; y < i * 9 + 9; y++) {
        let element = this.allProductUses[y];
        if (element) {
          element.id = y + 1;
          data.push(element);
        }
      }
      this.uses.push({ data });
    }
  },
};
</script>

<style></style>
