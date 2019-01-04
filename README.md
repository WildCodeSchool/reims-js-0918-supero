# reims-js-0918-supero

## DESCRIPTION

All-mighty Zeus gave us one mission : bring together all athletes in France on a mobile app in order to create & develop a wide community.

Alexandre, Benjamin, Alexis et Eugène, third year students at Neoma Business School, have volunteered to assist Zeus in his efforts to carry out this mission.

---

## REQUIREMENTS

In order to use this app, you need the following :
- nodejs >= v8.10.0
- npm >= v6.5.0

---

## SETUP

- First of all, clone the repository from github :

```
git clone git@github.com:WildCodeSchool/reims-js-0918-supero.git
```

- In both folders _supero-front_ and _supero-back_, install npm with this line of command :

```
npm install
```

- In the root of _supero-back_ folder, create a file named _.env_ and fill it with those informations :

```
DEV_USER=ton_pseudo_mysql
DEV_PASSWORD=ton_mdp_mysql
```

- In _supero-back_ again, type the following line of command in order to create the database :

```
npm run migrate up
```

---

## HOW TO START

- In _supero-back_ folder, start your server with Node with the following line of command :

```
node index.js
```

- In _supero-front_ folder, start React with npm :

```
npm start
```

---

## DEVELOPER TEAM

- Da Silva Quentin
- Guerre Robin
- Niveau Benoit
- Raymond Fabien
