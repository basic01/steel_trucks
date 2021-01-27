<template>
  <div id="app">
    <Nav />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="border-top-nav"></div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Nav, Footer },
};
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
* {
  padding: 0;
  margin: 0;
  /* font-family: Roboto, sans-serif; */
  font-family: "Roboto Condensed", sans-serif;
}

.main-blue {
  color: #07237d;
}

.second-blue {
  color: #092654;
}

.main-text {
  color: #072654;
  /* font-weight: 700; */
  font-size: 1.3em;
}

.font-size-normal {
  font-size: 1.3em;
}

.btn-general {
  background: #07237d;
  color: #fff;
  border-radius: 20px;
  padding: 5px 2.5em;
  font-weight: bold;
  font-size: 1.2em;
  border: none;
  outline: none;
}

.btn-general:hover {
  color: #fff;
  background: #353535;
  transition: 0.3s all;
  text-decoration: none;
}

.main-header {
  color: #07237d;
  font-weight: bold;
  font-size: 3em;
  margin-top: 40px;
}

.second-header {
  color: #072654;
  font-weight: bold;
  font-size: 2.3em;
}

.third-header {
  color: #07237d;
  font-weight: bold;
  font-size: 2.3em;
}

.flex-right,
.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flex-center {
  align-items: center;
}

.flex-right {
  align-items: flex-end;
}

.bg-gray {
  background-color: #282828;
}

.text-gray {
  color: #282828;
}

.form label {
  color: #353535;
  font-weight: bold;
}

.banner {
  /* height: 20em; */
  width: 100%;
  padding: 0;
  /* background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
}

.banner img {
  width: 100%;
  object-fit: cover;
  min-height: 18em;
  object-position: left;
}
.banner label {
  background: rgba(7, 35, 125, 0.5);
  color: #fff;
  font-weight: bold;
  padding: 5px 25px;
  border-radius: 10px;
  font-size: 2em;
  /* margin: 1em 0.7em; */
}

.border-top-nav {
  margin-top: 100px;
}
a,
a:hover {
  text-decoration: none;
}
</style>
