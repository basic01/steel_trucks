<template>
  <div class="col-md-4 col-lg-3 mb-5">
    <div class="left-info">
      <div class="options">
        <ul>
          <li>Automotriz</li>
          <li>Aeroespacial</li>
          <li>Salud</li>
          <li>Prototypes</li>
        </ul>
      </div>
      <div class="help">
        <h4 class="font-weight-bold my-4">¿Cómo podemos ayudarte?</h4>
        <p class="mb-5">
          Entendemos la importancia de abordar cada trabajo de manera integral y
          creemos en el poder de la comunicación simple y fácil.
        </p>
        <label class="my-2 my-lg5 font-weight-bold text-center"
          >Preguntas y Respuestas</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactHelp",
};
</script>

<style>
.contacto p {
  color: #08237e;
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
