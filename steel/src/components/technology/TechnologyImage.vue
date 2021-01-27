<template>
  <div class="col-6 col-md-3 col-lg-3">
    <div class="row image-tecnologia p-2 p-lg-5">
      <img
        class="mt-3 w-100 mx-auto"
        style="object-fit: cover"
        :src="image.url"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnologyImage",
  props: ["image"],
};
</script>

<style></style>
