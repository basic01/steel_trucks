<template>
  <div class="row mt-5 mb-4 pt-0 pt-lg-4">
    <div
      class="col-6 col-lg-3 px-3 px-lg-5 footer-section"
      v-for="(footer, index) in allAccountsFooter"
      :key="index"
    >
      <section>
        <label>{{ footer.header }}</label>
        <ul>
          <li v-for="(item, index) in footer.links" :key="item + '_' + index">
            {{ item.text }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AccountFooter",
  computed: {
    ...mapGetters("accounts", ["allAccountsFooter"]),
  },
};
</script>

<style>
.footer-section {
  /* padding-left: 3em; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  border-right: 1px solid #030377;
}

.footer-section label {
  font-weight: bold;
  color: #030377;
  font-size: 1.1em;
}

.footer-section li {
  font-weight: bold;
  list-style: none;
  margin-bottom: 10px;
}
</style>
