# Rounting Express

## Récupérer liste de sport

- **GET** : _api/sports_

---

## Activités

### Récupérer liste d'activités

#### OrderBy prend un paramètre "new" ou "start" qui permettra d'afficher les activités créées recemment ou par ordre chronologique de démarrage

- **GET** : _api/activities?filter="param"&limit="nb"&skip="nb"_

---

### Récupérer liste d'activités par sport

- **GET** : _api/activities/sport/:sport_id?filter="param"&limit="nb"&skip="nb"_

---

### Récupérer liste d'activités par utilisateur

- **GET** : _api/activities/user/:user_id?filter="param"&limit="nb"&skip="nb"_

---

### Récupérer liste d'activités par lieu

- **GET** : _api/activities/city/:city_name?filter="param"&limit="nb"&skip="nb"_

---

### Récupérer liste d'activités par géolocalisation

- **GET**: _api/activities/?latitude="latitude_value"&longitude="longitude_value"&filter="param"&limit="nb"&skip="nb"_

---

### Poster une activité

- **POST** : _api/activities_

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

- **PUT** : _api/activities/id/:activity_id_

---

### Supprimer une activité

- **DELETE** : _api/activities/id/:activity_id_

---

## Utilisateurs

### Se connecter

- **GET** : _api/users_

### Créer un utilisateur

- **POST** : _api/users_

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

- **GET** : _api/users/:user_id_

---

### Modifier le profil d'un utilisateur

- **PUT** : _api/users/:user_id_
