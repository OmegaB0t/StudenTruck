export default  {
  "foodtrucks": [{
    "id": 0,
    "name": "Le Foude Truc",
    "mail": "lefoudetruck@gmail.com",
    "password": "b329403c3",
    "url": "https://vgy.me/ozYFTU.jpg",
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
      "url": "https://vgy.me/4HXzrf.jpg",
      "intitule": "Hamburger frites",
      "description": "Un delicieux sandwitch chaud compose d\"un steak, de tranches de cheddar, de salade et de tomates, accompagne de frites croustillantes.",
      "prix": 4
    }, {
      "id": 2,
      "url": "https://vgy.me/17M10z.png",
      "intitule": "Salade de pates",
      "description": "Une salade de pates fraiches, accompagnee de tomates, de crevettes et de salade.",
      "prix": 2
    }]
  },
  {
    "id": 3,
    "url": "https://vgy.me/E4zGZK.jpg",
    "name": "Sea truck",
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
      "url": "https://vgy.me/4HXzrf.jpg",
      "intitule": "Menu burger / frites",
      "description": "Menu burger / frites pour 6 euros",
      "prix": 6
    }]
  },
  {
    "id": 2,
    "url": "https://vgy.me/zlEbjQ.jpg",
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
      "url": "https://vgy.me/xc1QVZ.jpg",
      "intitule": "Croque burger",
      "description": "Un melange entre un croque monsieur et un hamburger. Ognon/jambon cru/cornichons",
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