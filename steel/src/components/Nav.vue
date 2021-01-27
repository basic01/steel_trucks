<template>
  <div class="main-nav">
    <!-- <div class="d-sm-none"> -->
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand class="col-8 col-md-4 col-lg-2">
        <router-link :to="{ name: 'home' }">
          <img
            class="w-100"
            src="@/assets/logo_steel_hooks.png"
            alt="steel_hooks"
          />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

        <b-navbar-nav class="mx-auto nav-options">
          <b-nav-item class="px-sm-3 nav-item">
            <router-link :to="{ name: 'home' }"
              ><span> Conócenos </span></router-link
            >
          </b-nav-item>
          <b-nav-item class="px-sm-3 nav-item">
            <router-link :to="{ name: 'components' }"
              ><span> Componentes </span></router-link
            ></b-nav-item
          >
          <b-nav-item class="px-sm-3 nav-item">
            <router-link :to="{ name: 'home' }"
              ><span> Servicios</span></router-link
            ></b-nav-item
          >
          <b-nav-item class="px-sm-3 nav-item">
            <router-link :to="{ name: 'technology' }"
              ><span> Tecnología</span></router-link
            ></b-nav-item
          >
          <b-nav-item class="px-sm-3 nav-item">
            <router-link :to="{ name: 'shop' }"
              ><span> Tienda Prototypes</span></router-link
            ></b-nav-item
          >
          <b-nav-item class="px-sm-3 nav-item">
            <router-link :to="{ name: 'contact' }"
              ><span>Contacto</span></router-link
            ></b-nav-item
          >
          <b-nav-item-dropdown class="px-sm-3 nav-item" text="Idioma">
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown class="px-sm-3 nav-item" text="Cuenta">
            <b-dropdown-item href="#">Ingresar</b-dropdown-item>
            <b-dropdown-item>
              <router-link :to="{ name: 'account' }"
                ><span> Crear </span></router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>

          <!-- 
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
           -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
.main-nav {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1030;
  height: 100px;
  background: #f8f9fa;
  border-bottom: 2px solid #08247d;
}

.nav-item span {
  color: black !important;
  font-weight: bold;
}
</style>
