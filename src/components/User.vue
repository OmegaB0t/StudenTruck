<template>
<div id="container">
<div id="connectionCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div id="topCardTitle" class="mdl-card__title">
        <h2 class="mdl-card__title-text"><img src="/static/img/icons/logo_192.png" alt="Logo" widht= "45" height = "45">Mr Test</h2>
    </div>
    <div class="mdl-card__actions mdl-card--border">
        <h4>Notifications</h4>
        <li>02/07/2017 La livraison de FoodTruckMaster a été annulée suite à un manque de commande </li>
        <h4>Historique</h4>
        <li> Commande du 08 mars 2018 <a v-on:click="detail">détail</a></li>
    </div>
</div>



</div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  methods: {
    detail : function () {
      location.href='/detail';
    }
  }
}
const $ = require('jquery')
</script>

<style scoped>
    #container {
        position: relative;
        top: 10vh;
        width:50%;
        margin: auto;
    }

@media screen and (max-width: 600px) {
    #container {
        position: relative;
        top: 10vh;
        width: 100%;
        margin: auto;
    }
}

#connectionCard {
    min-width: 300px;
    width: auto;
    height: auto;
    padding-bottom: 15px;
}

#topCardTitle h2 {
    color: balck;
    text-shadow: 0px 0px 1px white;
}

#topCardTitle {
    padding:10px;
    background-size: cover;
}

#InscriptionButton button, p {
     margin: 10px;
}
</style>