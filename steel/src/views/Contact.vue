<template>
  <div class="container-fluid">
    <div class="row">
      <ContactInfo />
    </div>

    <div class="row px-3 px-lg-5 mt-5">
      <ContactHelp />
      <ContactForm />
    </div>

    <div class="row">
      <ContactAddress />
    </div>
  </div>
</template>

<script>
import ContactInfo from "../components/contact/ContactInfo";
import ContactHelp from "../components/contact/ContactHelp";
import ContactForm from "../components/contact/ContactForm";
import ContactAddress from "../components/contact/ContactAddress";
export default {
  name: "ContactMain",
  components: {
    ContactInfo,
    ContactHelp,
    ContactForm,
    ContactAddress,
  },
};
</script>

<style></style>
