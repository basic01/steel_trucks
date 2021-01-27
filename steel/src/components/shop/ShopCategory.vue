<template>
  <div class="col-md-6 col-lg-3 mt-3">
    <div class="category flex-center">
      <img
        class="my-3 w-100 mx-auto"
        style="object-fit: cover"
        :src="category.img"
        :alt="category.name"
      />
      <a :href="'#' + category.link" class="btn-general">{{ category.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopMain",
  props: ["category"],
};
</script>

<style></style>
