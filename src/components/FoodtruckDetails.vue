<template>
  <div>
    <div class="picture">
      <img :src="this.picture.find(function(a){return a.id == $route.params.id}).url" />
    </div>
    <div class="mdl-grid">
      <div class="info">
        <span>{{ this.picture.find(function(a){return a.id == $route.params.id}).info }}</span>
      </div>
      <div v-for="menu in this.picture.find(function(a){return a.id == $route.params.id}).menus" v-bind:key="menu.id" class="image-card">
        <span class='foodTruckDetailsMenuIntitule'>
          <i class="material-icons">local_dining</i> {{ menu.intitule }}
        </span>
        <br>
        <span class='foodTruckDetailsMenuDesc'>
          {{ menu.description }}
        </span>
        <div class="picture">
          <img :src="menu.url" />
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--9-col mdl-cell--3-col-phone">
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-card__actions">
              COMMANDER
            </button>
          </div>
          <div class="foodTruckDetailsMenuPrix mdl-cell mdl-cell--3-col mdl-cell--1-col-phone">
            {{ menu.prix }} $
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data'
export default {
  // props: ['id'],
  data () {
    return {
      'picture': data.pictures // .find(this.props.id)
    }
  }
}
</script>
<style scoped>
  .mdl-grid{
    text-align: left;
  }
  .picture > img {
    color: #fff;
    width:100%;
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
  .foodTruckDetailsMenuIntitule{
    font-size: 20px;
    font-weight: bold;
  }
  .foodTruckDetailsMenuPrix{
    font-size: 18px;
  }
</style>