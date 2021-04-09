<template>
  <div>
    <h1 class="text-center main-header mb-4">
      Crear una cuenta
    </h1>
    <form action="" class="form">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Nombre"
        />
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input
          type="text"
          class="form-control"
          id="apellido"
          placeholder="Apellido"
        />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Correo Electrónico"
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Contraseña"
        />
      </div>
      <div class="form-group">
        <label for="email">Suscríbete a nuestras promociones:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Dirección de Correo Electrónico"
        />
      </div>
      <button
        class="form-control text-white font-weight-bold"
        style="background-color: #282828;"
      >
        Crear cuenta
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AccountForm",
};
</script>
