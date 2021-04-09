<template>
  <div class="container-fluid">
    <div class="row flex-center">
      <div class="col-11 col-md-8">
        <AccountForm />
        <AccountFooter />
      </div>
    </div>
  </div>
</template>
<script>
import AccountForm from "../components/account/AccountForm";
import AccountFooter from "../components/account/AccountFooter";
export default {
  name: "AccountMain",
  components: {
    AccountForm,
    AccountFooter,
  },
};
</script>
