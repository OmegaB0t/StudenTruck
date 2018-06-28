<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">StudenTruck</span>
        <div class="mdl-layout-spacer"></div>
        <div class="material-icons mdl-badge mdl-badge--overlap" data-badge="1" v-on:click="user">turned_in</div>
      </div>
    </header>

    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Menu</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Accueil</router-link>
        <router-link class="mdl-navigation__link" to="/foodtruckList" @click.native="hideMenu">Liste des menus</router-link>
        <router-link class="mdl-navigation__link" to="/foodtruckAddMenu" @click.native="hideMenu">Ajouter un menu</router-link>
      </nav>
    </div>
  
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
  </div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    },
    user : function () {
      location.href='/user';
    }
  }
}
const $ = require('jquery')
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Oxygen');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

body {
  margin: 0;
}

#app {
  font-family: 'Oxygen', sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(./assets/Bandeau_StudenTruck_1.png);
}

main {
  font-family: 'Oxygen', sans-serif;
  text-align: center;
  margin-top: 0px;
}

header {
  font-family: 'Oxygen', sans-serif;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background: url(./assets/Bandeau_StudenTruck_1.png);
  color: #ffffff;
}

header span {
  font-family: 'Oxygen', sans-serif;
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.mdl-layout-title {
  font-family: 'Oxygen', sans-serif;
  margin-bottom: 10px;
  font-size: 22px;
}

.mdl-layout__header {
  background: url(./assets/Bandeau_StudenTruck_1.png);
}

.mdl-layout__drawer {
  font-family: 'Oxygen', sans-serif;
  color: #ffffff;
  background: url(./assets/Bandeau_StudenTruck_3.png);
}
.mdl-layout__drawer .mdl-navigation .mdl-navigation__link {
  font-family: 'Oxygen', sans-serif;
  color: #ffffff;
}
</style>
