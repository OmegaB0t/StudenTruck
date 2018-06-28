<template>
<div id="container">
    <div class="mdl-grid">
      <div class="image-card">
        <span class='foodTruckDetailsMenuIntitule'>
          <i class="material-icons">local_dining</i> Hamburger frites 4 €
        </span>
        <br>
        <span class='foodTruckDetailsMenuDesc'>
          Commande du 08 mars 2018
        </span>
        <div class="imgMenuParent">
          <img class="imgMenu" src="https://vgy.me/4HXzrf.jpg" />
        </div>
        <div class="mdl-grid">
        </div>
        <br>
      </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
    .mdl-grid{
    text-align: left;
  }
  .picture > img {
    width:100%;
    display: block;
  }
  .info {
    text-align: right;
    padding: 5px;
    font-size: 14px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
  .mdl-button{
    color: #fff;
    background-color: #333;
    padding: 0px;
    padding-top: 4px;
    min-height: 30px;
    height: 30px;
  }
  .image-card{
    width:100%;
  }
  .foodTruckDetailsMenuIntitule{
    font-size: 20px;
    font-weight: bold;
  }
  .foodTruckDetailsMenuPrix{
    font-size: 18px;
  }
  .buttonReturn{
    display: flex;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .imgMenu{
    max-height: 300px;
    max-width: 100%;
    width: auto;
  }
  .imgMenuParent{
    text-align: center;
    width: 100%;
  }
  .buttonReturnText{
    vertical-align: 0%;
  }
</style>