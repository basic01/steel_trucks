<template>
  <div class="col-md-4 mb-4">
    <div class="component-img">
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
  name: "ComponentImage",
  props: ["image"],
};
</script>

<style></style>
