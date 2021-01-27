<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <TechnologyGeneral
          v-for="(item, index) in allTechnologies"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TechnologyGeneral from "../components/technology/TechnologyGeneral";
export default {
  name: "TechnologyMain",
  components: {
    TechnologyGeneral,
  },
  computed: {
    ...mapGetters("technologies", ["allTechnologies"]),
  },
};
</script>
