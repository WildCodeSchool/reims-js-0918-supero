# reims-js-0918-supero-front

## REQUIREMENTS

We assume that you have the same requirements than in the general readme, at the root of the project folder. As a reminder :
- nodejs >= v8.10.0
- npm >= v6.5.0

---

## HOW TO START

This part is only a reminder of instructions written in the root folder. If you follow these instructions only, you will not be able to get data from your database or connect to your API.

- Install node dependencies running

```
npm install
```

- Create a file named _.env_ in the root of this folder (supero-front). Here you have to write the route that provides access to the API. For instance:

```
REACT_APP_API=http://localhost:3001
```

- Start with npm running :

```
npm start
```

---

## BUILD

If you are ready to deploy to production, you can create a minified bundle with this command :

```
npm run build
```

---

## DESCRIPTION

This front folder has been created with create-react-app. You can learn more about it here :

https://github.com/facebook/create-react-app

---