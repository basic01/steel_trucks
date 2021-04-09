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
    
    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6522.6382905999435!2d-100.41875853127377!3d20.611939893561235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35a95329ea36b%3A0x8e953ece8a676bde!2sStamping%20Steel%20and%20Trucks%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1615569250620!5m2!1ses-419!2smx" width="1024" height="800" style="border:10px; width: 100%;" allowfullscreen="" loading="lazy"></iframe>
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
