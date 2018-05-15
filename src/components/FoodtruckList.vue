<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <i class="material-icons">keyboard_arrow_left</i>
        <datepicker id="datepicker" :language="languages[language]" format="dd/M/yyyy" placeholder="Date" value=""></datepicker>
        <i class="material-icons">keyboard_arrow_right</i>
        <div v-for="picture in this.pictures" v-bind:key="picture.id" class="image-card" @click="displayDetails(picture.id)">
          <div class="image-card__picture">
            <img :src="picture.url" />
          </div>
          <div class="mdl-grid image-card__title mdl-card__actions">
            <div class="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
              <span>{{ picture.name }}</span>
            </div>
          </div>
          <div class="mdl-grid image-card__comment mdl-card__actions">
            <div class="mdl-cell mdl-cell--6-col mdl-cell--2-col-phone">
              <img class="icon" src="../assets/clock-circular-outline.png">
              <span>{{ picture.heure }}</span>
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--2-col-phone">
              <img class="icon" src="../assets/cart.png">
              <span>{{ picture.commandes }}/{{ picture.minCommandes }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import data from '../data'
  import Datepicker from 'vuejs-datepicker'
  import * as lang from 'vuejs-datepicker/src/locale'

  let ladate = new Date()
  let aujourdhui = ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()

  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({name: 'FoodtruckDetails', params: { id: id }})
      }
    },
    data () {
      return {
        'pictures': data.pictures,
        language: "fr",
        languages: lang,
      }
    },
    mounted () {
      document.getElementById("datepicker").setAttribute("value", aujourdhui);
    },
    components: {
      Datepicker
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