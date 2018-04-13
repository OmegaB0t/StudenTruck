# studentruck

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

### Our commands

```bash
# lancer l'application
npm run dev

# lancer ngrok
ngrok http 8080
```

``` bash
# placer les changements en attente pour pouvoir pull
git stash

# réinsérer les changements en attente dans le code
git stash pop

# pull les changement (le --rebase permet de merger plus facilement les conflits)
git pull --rebase origin LaBrancheActuelle

# faire un commit
git commit "nomducommit"

# push (nécéssite un commit d'abord)
git push origin LaBrancheActuelle

# push forcé, à faire si message du type "branche courante derrière la branche...", seulement sur la branche ou on est, surtout pas master !
git push -f origin master
git pull origin master --allow-unrelated-histories

# ajouter un fichier au projet
git add "path/to/file.xyz"

# créer une nouvelle branche dans le projet
git checkout -b "nomdebranche"

# se déplacer sur une branche du projet
git checkout "nomdebranche"

# supprimer une branche
git checkout -D "nomdebranche"
```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
