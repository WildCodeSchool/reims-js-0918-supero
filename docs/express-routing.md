# Rounting Express

## Récupérer liste de sport

- **GET** : _/sports_

---

## Activités

### Récupérer liste d'activités

- **GET** : _/activities?limit="nb"&skip="nb"_

---

### Récupérer liste d'activités par sport

- **GET** : _/activities/sport/:sport_id?&limit="nb"&skip="nb"_

---

### Récupérer liste d'activités par utilisateur

- **GET** : _/activities/user/:user_id?&limit="nb"&skip="nb"_

---

### Récupérer liste d'activités par lieu

- **GET** : _/activities/city/:city_name?&limit="nb"&skip="nb"_

---

### Récupérer liste d'activités par géolocalisation

- **GET**: _/activities/?latitude="latitude_value"&longitude="longitude_value"&limit="nb"&skip="nb"_

---

### Poster une activité

- **POST** : _/activities_

```sql
        sports_id:INT,
        creator_id:INT,
        difficulty:INT,
        activity_description:VARCHAR(500),
        adresse:VARCHAR(500),
        city:VARCHAR(250),
        latitude:VARCHAR(500),
        longitude:VARCHAR(500)
        start_time:DATE,
        duration:INT,
        photo:VARCHAR(255),
        max_participants:INT,
        creation_time:DATE
```

---

### Modifier une activité

- **PUT** : _/activities/id/:activity_id_

---

### Supprimer une activité

- **DELETE** : _/activities/id/:activity_id_

---

## Utilisateurs

### Se connecter

- **GET** : _/users_

### Créer un utilisateur

- **POST** : _/users_

```sql
    lastname:VARCHAR(255),
    firstname:VARCHAR(255),
    gender:VARCHAR(255),
    pseudo:VARCHAR(255),
    birthdate:DATE,
    email:VARCHAR(255),
    password:VARCHAR(255),
    photo:VARCHAR(255),
    level:INT
```

---

### Afficher le profil d'un utilisateur

- **GET** : _/users/:user_id_

---

### Modifier le profil d'un utilisateur

- **PUT** : _/users/:user_id_
