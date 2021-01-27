<template>
  <div class="col-md-6 px-md-4">
    <section class="component py-4 px-3 mt-5">
      <div class="header-component">
        <h1 class="text-center third-header mb-4">
          {{ item.header.title }}
        </h1>
      </div>
      <div class="component-images">
        <div class="row">
          <ComponentImage
            v-for="img in item.images"
            :key="img.alt"
            :image="img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ComponentImage from "./ComponentImage";
export default {
  name: "ComponentGeneral",
  components: {
    ComponentImage,
  },
  props: ["item"],
};
</script>

<style>
.component {
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
</style>
