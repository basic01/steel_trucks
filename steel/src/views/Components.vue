<template>
  <div class="container-fluid px-3 px-md-5">
    <div class="row">
      <ComponentGeneral
        v-for="(item, index) in allComponents"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ComponentGeneral from "../components/component/ComponentGeneral";
export default {
  name: "ComponentMain",
  components: {
    ComponentGeneral,
  },
  computed: {
    ...mapGetters("components", ["allComponents"]),
  },
};
</script>
