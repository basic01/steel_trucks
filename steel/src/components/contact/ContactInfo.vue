<template>
  <div class="col-12">
    <div class="mx-auto">
      <h1 class="text-center main-header mb-4" style="font-size: 4em">
        Contacto
      </h1>
      <div class="row contactos">
        <div class="col-md-4 flex-center">
          <div class="contacto px-2 py-3 py-md-0 flex-center">
            <img src="@/assets/logo_steel.png" alt="logo_steel" />
            <p>(442) 217 3255 ext. 106</p>
            <p>(442) 210 4093 ext. 106</p>
          </div>
        </div>
        <div class="col-md-4 flex-center">
          <div class="contacto px-2 py-3 py-md-0 flex-center">
            <img src="@/assets/logo_stamping.png" alt="logo_stamping" />
            <p>(442) 257 1098 ext. 122</p>
            <p>(442) 257 0954 ext. 122</p>
          </div>
        </div>

        <div class="col-md-4 flex-center">
          <div class="contacto px-2 py-3 py-md-0 flex-center">
            <img src="@/assets/email.png" alt="logo_steel" class="" />
            <a href="Contacto@steelandtrucks.com"
              >Contacto@steelandtrucks.com</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
};
</script>

<style>
.contacto p,
.contacto a {
  color: #08237e;
  margin-bottom: 0;
  font-weight: bold;
}

.contact-form-header {
  color: #353535;
  font-weight: bold;
}
.contact-form-header label {
  font-size: 1.3em;
}

.contacto img {
  height: 4em;
  margin-bottom: 1em;
}

.left-info .options {
  background: #efefef;
  padding: 1em 2em;
  padding-bottom: 3em;
}

.left-info .help {
  color: #fff;
  background: #053670;
  padding: 1em 2em;
}

.options ul {
  list-style: none;
}

.options li {
  margin: 0.7em 0;
}
</style>
