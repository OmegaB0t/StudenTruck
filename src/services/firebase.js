import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA0PHayTvmdNH2O10NhR_6cdqQiE8Te_Gg",
    authDomain: "studentruck.firebaseapp.com",
    databaseURL: "https://studentruck.firebaseio.com",
    projectId: "studentruck",
    storageBucket: "studentruck.appspot.com",
    messagingSenderId: "375258316446"
}
firebase.initializeApp(config)

export default {
 database: firebase.database()
}