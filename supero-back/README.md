# reims-js-0918-supero-back

## REQUIREMENTS

We assume that you have the same requirements than in the general readme, at the root of the project folder. As a reminder :
- nodejs >= v8.10.0
- npm >= v6.5.0

---

## HOW TO START

This part is only a reminder of instructions written in the root folder. These instructions will allow you to create your database and set up your API.

- Install node dependencies running

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

## HOW TO START

- Start your express server with Node with the following line of command :

```
node index.js
```

---

## DESCRIPTION

Our database has been created with mysql. About our API, we used express in order to set it up. If you want to know more about it:

https://expressjs.com/

---
