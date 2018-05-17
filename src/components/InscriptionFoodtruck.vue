<template>
  <div id="container">
    <div id="connectionCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div id="topCardTitle" class="mdl-card__title">
        <h2 class="mdl-card__title-text">Inscription Foodtruck</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <form name="InscriptionForm" id="InscriptionForm" action="/Hello" onsubmit="return validateForm()" method="post">
        <div id="mailInputBox" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name="mail" type="text" id="mail">
            <label class="mdl-textfield__label" for="mail">Email</label>
        </div>
        <div id="mailConfirmationInputBox" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name="mail" type="text" id="mailConfirmation" autocomplete="off">
            <label class="mdl-textfield__label" for="mail">Confirmation du mail</label>
        </div>
        <div id="phoneNumber" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name="phone" type="text" id="phone">
            <label class="mdl-textfield__label" for="phone">Numéro de téléphone</label>
        </div>
        <div id="siretNumber" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name="siret" type="text" id="siret">
            <label class="mdl-textfield__label" for="siret">Numéro SIRET</label>
        </div>
        <p> Le numéro SIRET servira à vérifier que votre entreprise existe bien </p>
        <div id="AskApprobationButton">
            <button id="submitButton" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> Demande d'approbation </button>
            <p> Vous avez déjà un compte ? <a href="/connexion"> cliquez ici ! </a> </p>
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
      msg: 'Ceci est la page d\'inscription'
    }
  },
  mounted: function() {
    
    $(document).ready(function(){
       
        $('#submitButton').on('click', function(e){
     
            var userInputMail = $("#mail").val();
            var userInputMailConfirmation = $("#mailConfirmation").val();
            var inputSiret = $("#siret").val();
            var inputPhone = $("#phone").val();

            var mailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");  
            var phoneRegex = new RegExp("^(0[1-68])(?:[ _.-]?(\d{2})){4}$");
            
            var errorMsg = "";
            var wrongMail = (userInputMail == "" || !mailRegex.test(userInputMail));
            var verifMailsInputs = (userInputMail === userInputMailConfirmation);
            var verifPhone = (inputPhone == "" || !phoneRegex.test(inputPhone));
            var verifSiret = ( (inputSiret.length == 14) && (
                // Algo de Luhn (https://gist.github.com/ShirtlessKirk/2134376)
                function(siret){return function(c){for(var l=c.length,b=1,s=0,v;l;)v=parseInt(c.charAt(--l),10),s+=(b^=1)?a[v]:v;return s&&0===s%10}}([0,2,4,6,8,1,3,5,7,9]))
            );
            
            if(wrongMail) {
                errorMsg += "Mail invalide \n";
            }   
            if(!verifMailsInputs) {
                errorMsg += "Les mails ne sont pas les mêmes \n";
            }
            if(verifPhone) {
                errorMsg += "Le numéro de téléphone est incorrect \n";
            }
            if(!verifSiret) {
                errorMsg += "Le numéro SIRET est incorrect \n";
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
    background: url(../assets/MaterialBackground.png);
    background-image: url(../assets/MaterialBackground.png);
    background-size: cover;
}

#AskApprobationButton button, p {
     margin: 10px;
}

</style>
