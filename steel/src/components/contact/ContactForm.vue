<template>
  <div class="col-md-8 col-lg-9">
    <div class="contact-form">
      <div class="contact-form-header">
        <label>Datos Personales</label>
        <p>
          Complete nuestro sencillo Formulario de solicitud de cotización a
          continuación para obtener una cotización rápida.
        </p>
      </div>
      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <!-- <label for="nombre">Nombre</label> -->
            <input
              type="text"
              class="form-control"
              id="nombre"
              placeholder="Nombre"
            />
          </div>
          <div class="form-group col-md-4">
            <!-- <label for="telefono">Teléfono</label> -->
            <input
              type="text"
              class="form-control"
              id="telefono"
              placeholder="Teléfono"
            />
          </div>
          <div class="form-group col-md-4">
            <!-- <label for="correo">Correo</label> -->
            <input
              type="text"
              class="form-control"
              id="correo"
              placeholder="Correo"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <!-- <label for="empresa">Empresa</label> -->
            <input
              type="text"
              class="form-control"
              id="empresa"
              placeholder="Empresa"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <!-- <label for="servicios_requeridos">Servicios Requeridos</label> -->
            <input
              type="text"
              class="form-control"
              id="servicios_requeridos"
              placeholder="Servicios Requeridos"
            />
          </div>
          <div class="form-group col-md-6">
            <!-- <label for="servicios_adicionales">Servicios Adicionales</label> -->
            <input
              type="text"
              class="form-control"
              id="servicios_adicionales"
              placeholder="Servicios Adicionales"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <!-- <label for="giro_empresa">Giro de la empresa</label> -->
            <input
              type="text"
              class="form-control"
              id="giro_empresa"
              placeholder="Giro de la empresa"
            />
          </div>
          <div class="form-group col-md-8">
            <!-- <label for="direccion">Dirección</label> -->
            <input
              type="text"
              class="form-control"
              id="direccion"
              placeholder="Dirección"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <!-- <label for="producto">Productos</label> -->
            <input
              type="text"
              class="form-control"
              id="producto"
              placeholder="Productos"
            />
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="form-check col-md-2">
            <input
              class="mr-2"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">Chasis</label>
          </div>
          <div class="form-check col-md-2">
            <input
              class="mr-2"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">Escape</label>
          </div>
          <div class="form-check col-md-2">
            <input
              class="mr-2"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">Tubos</label>
          </div>
          <div class="form-check col-md-2">
            <input
              class="mr-2"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">Palancas</label>
          </div>
          <div class="form-check col-md-2">
            <input
              class="mr-2"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">Ensambles</label>
          </div>
          <div class="form-check col-md-2">
            <input
              class="mr-2"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">Alambre</label>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <!-- <label for="observaciones">Observaciones</label> -->
            <textarea
              class="form-control"
              id="observaciones"
              placeholder="Observaciones"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12 test">
            <button
              class="form-control text-white font-weight-bold"
              style="background-color: #282828;"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style>
.contact-form-header {
  color: #353535;
  font-weight: bold;
}
.contact-form-header label {
  font-size: 1.3em;
}

#observaciones {
  height: 11.2em;
  resize: none;
}
</style>
