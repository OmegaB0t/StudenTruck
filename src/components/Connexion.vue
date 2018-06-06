<template>
  <div id="container">
    <div id="connectionCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div id="topCardTitle" class="mdl-card__title">
        <h2 class="mdl-card__title-text">Connexion</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <form name="connexionForm" id="connexionForm" action="/Hello" onsubmit="return validateForm()" method="post">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name="mail" type="text" id="mail">
            <label id="labelForMail" class="mdl-textfield__label" for="mail">Email</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="password" id="password">  
            <label id="labelForPassword" class="mdl-textfield__label" for="password">Password</label>
          </div>
          <div id="connexionInscription">
            <button id="submitButton" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> Connexion </button>
            <p><a href="/forgotPassword"> J'ai oublié mon mot de passe ? </a> </p>
            <p> Pas encore inscrit ? <a href="/inscription"> cliquez ici ! </a> </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

const $ = require('jquery')

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Ceci est la page de connexion'
    }
  },
  mounted: function() {
    $(document).ready(function(){
      
      $('#submitButton').on('click', function(e){
     
        var userInputMail = $("#mail");
        var userInputPassword = $("#password");
        

        var mailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");  
        
        var errorMsg = "";
        var wrongMail = (userInputMail.val() == "" || !mailRegex.test(userInputMail.val()));

        if(wrongMail) {
          errorMsg += "Mail invalide \n";
        }
        if (userInputPassword.val().length < 8) {
          errorMsg +="Votre mot de passe doit faire au moins 8 caractères \n";
        }
        if(errorMsg !== "") {
          e.preventDefault();
          alert("Erreur : \n" + errorMsg);
        }
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

#connectionCard {
    font-family: 'Oxygen', sans-serif;
    min-width: 300px;
    width: auto;
    height: auto;
    padding-bottom: 15px;
}

#connexionInscription button, p {
  font-family: 'Oxygen', sans-serif;
  margin: 10px;
}

#topCardTitle h2 {
  font-family: 'Oxygen', sans-serif;
  color: balck;
      text-shadow: 0px 0px 1px white;
}

#topCardTitle {
  font-family: 'Oxygen', sans-serif;
  padding:10px;
  background: url(../assets/Bandeau_StudenTruck_1.png);
  background-image: url(../assets/Bandeau_StudenTruck_1.png);
  background-size: cover;
}

</style>
