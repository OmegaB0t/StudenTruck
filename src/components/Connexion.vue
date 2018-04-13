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
            <label class="mdl-textfield__label" for="mail">Email</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="password" id="password">  
            <label class="mdl-textfield__label" for="password">Password</label>
          </div>
          <div id="connexionInscription">
            <button id="submitButton" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> Connexion </button>
            <p> Pas encore inscrit ? <a href="#"> cliquez ici ! </a> </p>
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
     
        var userInputMail = $("#mail").val();
        var mailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");  
        
        var wrongMail = (userInputMail == "" || !mailRegex.test(userInputMail));
        
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
  display: flex;
  align-items: center;
  justify-content: center;
}

#connectionCard {
  min-width: 300px;
  width: auto;
  max-width: 550px;
  height: auto;
  padding-bottom: 15px;
}

#connexionInscription button, p {
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
