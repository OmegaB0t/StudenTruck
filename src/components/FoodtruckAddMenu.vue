<template>
  <div id="container">
    <div id="addMenuCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div id="topCardTitle" class="mdl-card__title">
        <h2 class="mdl-card__title-text">Ajouter un menu</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <form name="addMenuForm" id="addMenuForm" action="/FoodTruckList" method="get">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name="intitule" type="text" id="intitule">
            <label id="labelForIntitule" class="mdl-textfield__label" for="mail">Intitulé du menu</label>
          </div>
          <br/>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <textarea class="mdl-textfield__input" name= "desc" type="text" rows=4 id="desc"></textarea>
            <label id="labelForDesc" class="mdl-textfield__label" for="desc">Description</label>
          </div>
          <br/>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name= "price" type="number" step="0.01" id="price">
            <label id="labelForPrice" class="mdl-textfield__label" for="price">Prix</label>
          </div>
          <br/>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <p>Choisir une image
                <input name="image" type="file" id="image">
            </p>
          </div>
          <div id="connexionInscription">
            <button id="submitButton" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> Ajouter </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>

#container {
        font-family: 'Oxygen', sans-serif;
        position: relative;
        top: 10vh;
        width:50%;
        margin: auto;
    }

@media screen and (max-width: 600px) {
    #container {
        font-family: 'Oxygen', sans-serif;
        position: relative;
        top: 10vh;
        width: 100%;
        margin: auto;
    }
}

#addMenuCard {
    font-family: 'Oxygen', sans-serif;
    min-width: 300px;
    width: auto;
    height: auto;
    padding-bottom: 15px;
}
</style>
