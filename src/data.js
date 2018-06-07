export default  {
  "foodtrucks": [{
    "id": 0,
    "name": "Le Foude Truc",
    "mail": "lefoudetruck@gmail.com",
    "password": "b329403c3",
    "url": "http://www.jammincrepes.com/wp-content/uploads/2017/02/Also-Okay-to-use-1024x617.jpg",
    "heure": "12h35",
    "dates": [{
      "date": "2018-05-17",
      "minCommandes": 30,
      "commandes": 17
    }, {
      "date": "2018-05-18",
      "minCommandes": 30,
      "commandes": 4
    }],
    "menus": [{
      "id": 1,
      "url": "http://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/02280-10-BBQBaconWhopper_300x270_CR.jpg",
      "intitule": "Hamburger",
      "description": "Un delicieux sandwitch chaud compose d\"un steak, de tranches de cheddar, de salade et de tomates.",
      "prix": 4
    }, {
      "id": 2,
      "url": "https://media.toupargel.fr/p-565x436/12376-1-frites-au-four-surgelees-1-kg-32038.jpg",
      "intitule": "Frites",
      "description": "Des frites, parfait pour accompagner un sandwitch.",
      "prix": 2
    }]
  },
  {
    "id": 3,
    "url": "http://s1.lprs1.fr/images/2017/02/06/6658101_qesthumb-jsp_1000x625.jpg",
    "name": "Le bon kebab",
    "password": "b3c72v9b73cn",
    "mail": "lbk35@orange.fr",
    "heure": "11h35",
    "dates": [{
      "date": "2018-05-18",
      "minCommandes": 15,
      "commandes": 15
    }],
    "menus": [{
      "id": 4,
      "url": "https://i2.wp.com/www.kebabandco.fr/wp-content/uploads/2017/03/MENUS-KEBAB.png?fit=1024%2C1024&ssl=1",
      "intitule": "Kebab frites boisson",
      "description": "Menu complet pour 6 euros. \nBoisson au choix.",
      "prix": 6
    }]
  },
  {
    "id": 2,
    "url": "http://www.lepainquotidien.be/wp-content/uploads/sites/12/2016/07/BE-FoodTruck_MainImage.jpg",
    "name": "Petit Pain",
    "password": "b3c72v9b73cn",
    "mail": "lbk35@orange.fr",
    "heure": "11h35",
    "dates": [{
      "date": "2018-05-18",
      "minCommandes": 10,
      "commandes": 17
    }],
    "menus": [{
      "id": 4,
      "url": "https://i2.wp.com/www.kebabandco.fr/wp-content/uploads/2017/03/MENUS-KEBAB.png?fit=1024%2C1024&ssl=1",
      "intitule": "Kebab frites boisson",
      "description": "Menu complet pour 6 euros. \nBoisson au choix.",
      "prix": 6
    }]
  }],
  "clients": [{
      "id": 1,
    "name": "Bob",
    "nickname": "le bricoleur",
    "password": "xb2710e7",
    "orders": [{
      "id": 1,
      "date": "2018-05-17",
      "menu": [1, 2]
    }, {
      "id": 2,
      "date": "2018-05-18",
      "menu": [3]
    }]
  }]
}