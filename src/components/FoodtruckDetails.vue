<template>
  <div>
    <div class="picture">
      <div class="buttonReturn mdl-cell mdl-cell--6-col mdl-cell--4-tablet mdl-cell--2-col-phone">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons buttonReturnText" @click="returnList()">keyboard_backspace</i>
        </button>
      </div>
      <img :src="this.foodtruck.find(function(a){return a.id == $route.params.id}).url" />
    </div>
    <div class="info">
      <span>{{ this.foodtruck.find(function(a){return a.id == $route.params.id}).info }}</span>
    </div>
    <div class="mdl-grid">
      <div v-for="menu in this.foodtruck.find(function(a){return a.id == $route.params.id}).menus" v-bind:key="menu.id" class="image-card">
        <span class='foodTruckDetailsMenuIntitule'>
          <i class="material-icons">local_dining</i> {{ menu.intitule }}
        </span>
        <br>
        <span class='foodTruckDetailsMenuDesc'>
          {{ menu.description }}
        </span>
        <div class="imgMenuParent">
          <img class="imgMenu" :src="menu.url" />
        </div>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone">
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-card__actions">
              COMMANDER
            </button>
          </div>
          <div class="foodTruckDetailsMenuPrix mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone">
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
  // props: ['id']
  methods: {
    returnList () {
      this.$router.push({name: 'FoodtruckList'})
    }
  },
  data () {
    return {
      'foodtruck': data.foodtrucks // .find(this.props.id)
    }
  }
}
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