<template>
  <div class="px-5 px-md-2 col-md-4">
    <p
      v-for="item in use.data"
      :key="item.id"
      :item="item"
      class="mb-0 font-weight-bold font-size-normal"
    >
      {{ item.id }}.- {{ item.name }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShopTopUses",
  props: ["use"],
};
</script>

<style></style>
