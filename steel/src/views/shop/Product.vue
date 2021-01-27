<img src="@/assets/img/shop/products/product.png" /><template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="product-detail">
          <div class="row">
            <div class="col-md-7 mt-4 px-2 px-md-5">
              <h3 class="third-header px-4 px-md-0">
                Soporte Para Colgar Bici En Tubo Con Recubrimiento Hh-001r
              </h3>
              <div class="images row my-4 px-3 p-md-0">
                <div class="side col-2 pr-lg-4">
                  <img
                    class="w-100 p-1 mb-1"
                    src="@/assets/img/shop/products/product.png"
                  />
                  <img
                    class="w-100 p-1 mb-1"
                    src="@/assets/img/shop/products/product.png"
                  />
                  <img
                    class="w-100 p-1 mb-1"
                    src="@/assets/img/shop/products/product.png"
                  />
                </div>
                <div class="main col-9 flex-center">
                  <img src="@/assets/img/shop/products/product.png" />
                </div>
              </div>
            </div>
            <div class="col-md-5 mt-4 px-2 px-md-4 px-lg-5">
              <div class="options flex-right pr-4 pr-md-2">
                <router-link class="btn-general" :to="{ name: 'shop.stop15' }"
                  ><span>Top 15 Ventas</span></router-link
                >
              </div>
              <div class="buy my-4">
                <div class="prices flex-center">
                  <p class="before">Antes: $255</p>
                  <p class="current">$81.65</p>
                  <p class="discount">Ahorra: $173.35</p>
                </div>

                <div class="payment flex-center">
                  <div class="quantity my-2">
                    <button style="background: #067DC2">Cantidad</button>
                    <button class="btn-general">-</button>
                    <span class="product_quantity">0</span>
                    <button class="btn-general">+</button>
                  </div>
                  <div class="options mb-4 px-4 px-md-2">
                    <button>Comprar ahora</button>
                    <button>Paypal</button>
                    <button>Agregar al carrito</button>
                  </div>
                </div>
                <div class="payment_details">
                  <img
                    class="w-100 px-4 px-md-2"
                    src="@/assets/img/shop/payment_details.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="description px-3 px-md-4 pb-4">
                <label class="second-header" style="font-size: 2em"
                  >Descripción</label
                >
                <p class="second-blue font-size-normal">
                  Organiza y almacena tus bicicletas con nuestro gancho de acero
                  inoxidable certificado.
                </p>
                <p class="second-blue font-size-normal">
                  Puedes colocar bicicletas de diferentes tipos -Bicicletas
                  infantiles (rodada 10 a 20) -Bicicleta de montaña (rodada 20 a
                  29) (Anchura de llanta no mayor a 5 cm) -Bicicleta de ruta /
                  urbanas (rodada 20 a 28)
                </p>
                <p class="second-blue font-size-normal">
                  Pueden soportar un peso máximo de hasta 40 kg.
                </p>
                <p class="second-blue font-size-normal">
                  Medidas: Largo 25.4 cm; Diámetro del gancho 5 cm
                </p>
                <p class="second-blue font-size-normal">
                  ¡Llévalo contigo a donde necesites estacionar tu bicicleta!
                  Este modelo de gancho para colgar bicicletas es transportable
                  y no requiere de tornillos de instalación.
                </p>
              </div>
            </div>

            <div class="col-12 p-0">
              <div class="banner">
                <img
                  src="@/assets/img/shop/categories/banner_bicis.png"
                  alt=""
                />
              </div>
              <div class="banner">
                <img
                  src="@/assets/img/shop/categories/banner_top.png"
                  alt=""
                  style="object-position: center;"
                />
              </div>
              <!-- <div
                class="banner"
                :style="{
                  backgroundImage:
                    'url(' +
                    require('@/assets/img/shop/categories/banner.png') +
                    ')',
                }"
              ></div> -->
            </div>
          </div>

          <div class="col-12 mt-5">
            <splide :options="options">
              <splide-slide class="my-3 mx-3">
                <div class="slider-item flex-center">
                  <img src="@/assets/img/shop/products/product.png" />
                  <span class="font-weight-bold py-2">GANCHO HH-002R</span>
                </div>
              </splide-slide>
            </splide>
          </div>

          <div class="row flex-center">
            <div class="col-11 col-md-10">
              <AccountFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {} from '../../assets/img/shop/categories'
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import AccountFooter from "../../components/account/AccountFooter";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
// or
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { mapGetters } from "vuex";
export default {
  name: "ShopProduct",
  components: {
    AccountFooter,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        // gap: "2rem",
        type: "loop",
        autoWidth: true,
        focus: "center",
      },
      product: {
        name: "",
        images: [],
        prices: {
          discount: 0,
          price: 0,
        },
        quantity: 0,
        // description
        category: 1,
      },
    };
  },
  computed: {
    ...mapGetters("shop", ["allCategories", "allProducts"]),
  },
  mounted() {},
};
</script>

<style>
.product-detail .name {
  font-size: 2em;
  font-weight: bold;
  color: #07237d;
}

.prices {
  font-weight: bold;
  margin-right: 2em;
}

.prices p {
  margin-bottom: 0;
}

.prices .before {
  font-size: 2.5em;
  color: black;
  text-decoration: line-through;
}

.prices .discount {
  font-size: 2.5em;
  color: #d70000;
}

.prices .current {
  color: #07237d;
  font-size: 5em;
}

.images .side img,
.images .main {
  border: 2px solid rgba(0, 0, 0, 0.4);
}

.payment button {
  background: #07237d;
  color: #fff;
  border-radius: 20px;
  padding: 0px 1.3em;
  font-weight: bold;
  /* font-size: 1.2em; */
  border: none;
  outline: none;
  margin-right: 10px;
  margin-bottom: 10px;
}

.product_quantity {
  margin-right: 10px;
  font-size: 2em;
  font-weight: bold;
}
</style>
