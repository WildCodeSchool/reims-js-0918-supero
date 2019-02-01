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
DEV_USER=superouser
DEV_PASSWORD=superopassword
DEV_DB=supero
```

- In order to configure and fill your database, you have to create it by yourself. Don't forget that you have to use the same name than the one assigned to DEV_DB.

If the database already exists, make sure you have user privileges so you can create tables. Also make sure that the name assigned to DEV_DB in your .env file is the same that your database's.

If the database does not exist, you must have administrator privileges so you can create one. If you use mysql, connect to mysql and run :

```
CREATE DATABASE supero;
```

- Once your database exists, access _supero-back_ folder, type the following line of command in order to configure your database :

```
npm run migrate up
```

- Create a file named _.env_ in the root of _supero-front_ folder. Here you have to write the route that provides access to the API. For instance:

```
REACT_APP_API=http://localhost:3001
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
