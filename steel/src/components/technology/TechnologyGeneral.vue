<template>
  <section class="tecnologia">
    <!-- <div
      class="header-tecnologia"
      :style="{
        backgroundImage: 'url(' + item.header.banner + ')',
      }"
    >
      <label>{{ item.header.title }}</label>
    </div> -->
    <div class="banner mb-4 mb-lg-5 tecnologia-banner">
      <img :src="item.header.banner" :alt="item.header.title" />
    </div>
    <div class="description-tecnologia px-3 px-md-5">
      <h3 class="second-header" v-if="item.info.title != ''">
        {{ item.info.title }}
      </h3>
      <p class="main-text">
        {{ item.info.text }}
      </p>
    </div>
    <div class="row mx-0 mx-sm-5 mx-lg-0">
      <TechnologyImage v-for="img in item.images" :key="img.alt" :image="img" />
    </div>
  </section>
</template>

<script>
import TechnologyImage from "./TechnologyImage";
export default {
  name: "TechnologyGeneral",
  components: {
    TechnologyImage,
  },
  props: ["item"],
};
</script>

<style>
.tecnologia {
  margin-bottom: 2.5em;
}

.tecnologia-banner img {
  min-height: 8em;
}
/* .header-tecnologia {
  height: 15em;
  width: 100%;
  padding: 0;
  background: rgba(0, 0, 0, 0.9);
  margin-bottom: 2em;
}

.header-tecnologia label {
  background: rgba(7, 35, 125, 0.5);
  color: #fff;
  font-weight: bold;
  padding: 5px 50px;
  border-radius: 10px;
  font-size: 3em;
  margin: 1em 0.7em;
} */
</style>
