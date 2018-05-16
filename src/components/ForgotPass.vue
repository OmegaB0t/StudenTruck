<template>
  <div id="container">
    <div id="connectionCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div id="topCardTitle" class="mdl-card__title">
        <h2 class="mdl-card__title-text">Mot de passe oublié</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <form name="connexionForm" id="connexionForm" action="/Hello" onsubmit="return validateForm()" method="post">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name="mail" type="text" id="mail">
            <label id="labelForMail" class="mdl-textfield__label" for="mail">Email</label>
          </div>
          <div id="ButtonForgotPassword">
            <button id="submitButton" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> Réinitialiser mon mot de passe </button>
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

        var mailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");  
        
        var wrongMail = (userInputMail.val() == "" || !mailRegex.test(userInputMail.val()));

        if(wrongMail) {
          e.preventDefault();
          alert("Rentrez un mail valide !");
        }
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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

#ButtonForgotPassword button, p {
  margin: 10px;
}

#topCardTitle h2 {
  color: balck;
      text-shadow: 0px 0px 1px white;
}

#topCardTitle {
  padding:10px;
  background: url(../assets/MaterialBackground.png);
  background-image: url(../assets/MaterialBackground.png);
  background-size: cover;
}

</style>
