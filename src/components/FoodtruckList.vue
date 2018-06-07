<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <button class="mdl-button mdl-js-button " v-on:click="arrowLeft">
          <i class="material-icons" >keyboard_arrow_left</i>
        </button>
        <input id="date" type="date" value="">
        <button class="mdl-button mdl-js-button " v-on:click="arrowRight">
          <i class="material-icons" v-on:click="arrowRight">keyboard_arrow_right</i>
        </button>
        
        <div v-for="foodtruck in this.foodtrucks" v-bind:key="foodtruck.id" class="image-card" @click="displayDetails(picture.id)">
          <div class="image-card__picture">
            <img :src="foodtruck.url" />
          </div>
          <div class="mdl-grid image-card__title mdl-card__actions">
            <div class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
              <span>{{ foodtruck.name }}</span>
            </div>
          </div>
          <div class="mdl-grid image-card__comment mdl-card__actions">
            <div class="mdl-cell mdl-cell--6-col mdl-cell--2-col-phone">
              <img class="icon" src="../assets/clock-circular-outline.png">
              <span>{{ foodtruck.heure }}</span>
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--2-col-phone">
              <img class="icon" src="../assets/cart.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import data from '../data'
  import constant from '../utils/constant'
  let date = new Date()
  let today = date.getFullYear()+"-"+ (((date.getMonth()+1) < 10) ? "0"+(date.getMonth()+1) : (date.getMonth()+1)) +"-"+date.getDate()
  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({name: 'FoodtruckDetails', params: { id: id }})
      },
      arrowLeft () {
        console.log('ok left');
      },
      arrowRight () {
        console.log('ok right');
      },
    },
    data () {
      return {
        'foodtrucks': data.foodtrucks,
        'date': date
      }
    },
    mounted () {
      document.getElementById("date").setAttribute("value", today);
    }
  }
  
</script>
<style scoped>
  .add-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .image-card {
    position: relative;
    margin-bottom: 8px;
  }
  .image-card__picture > img {
    width:100%;
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: center;
    background: rgba(0, 0, 0, 0);
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  }
  .image-card__title {
    position: absolute;
    bottom: 0;
    height: 60px;
    padding: 0px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  .icon {
    width: 16px;
    height: 16px;
  }

</style>