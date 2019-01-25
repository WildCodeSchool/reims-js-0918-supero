'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  [
    [
      "1",
      "2",
      "4",
      "Pour s'entraîner avec courage !",
      "12, rue de Lorem Ipsum",
      "Reims",
      "49.284538",
      "4.053513",
      "2019-02-06 18:00:00",
      "03:30:00",
      null,
      "30",
      "Entraînement Run in Reims",
      "Me contacter personnellement pour plus d'infos"
    ],
    [
      "3",
      "1",
      "1",
      "Cours ouvert à tous",
      "12, rue de Lorem Ipsum",
      "Reims",
      "49.223447",
      "4.053412",
      "2019-02-02 16:30:00",
      "01:30:00",
      null,
      "12",
      "Initiation à la nage",
      "N'oubliez pas de vous inscrire à la piscine au préalable"
    ],
    [
      "2",
      "3",
      "2",
      "Balade en vélo hebdomadaire",
      "12, rue de Lorem Ipsum",
      "Reims",
      "49.247900",
      "3.986010",
      "2019-01-30 19:00:00",
      "01:00:00",
      null,
      "3",
      "Reims à vélo",
      "Pas sérieux s'abstenir"
    ],
    [
      "5",
      "4",
      "1",
      "Ne jamais oublier les bienfaits de la marche",
      "12, rue de Lorem Ipsum",
      "Reims",
      "49.258938",
      "4.024319",
      "2019-01-31 06:30:00",
      "00:45:00",
      null,
      "4",
      "Promenade",
      "Pour profiter d'une ville calme..."
    ],
    [
      "6",
      "2",
      "2",
      "Tournoi de handball entre amis",
      "12, rue de Lorem Ipsum",
      "Reims",
      "49.257789",
      "4.031926",
      "2019-02-03 14:00:00",
      "04:00:00",
      null,
      "25",
      "Handball",
      "Tous les niveaux sont admis"
    ],
    [
      "4",
      "1",
      "4",
      "La puissance de la fonte",
      "12, rue de Lorem Ipsum",
      "Reims",
      "49.262856",
      "4.028530",
      "2019-02-05 17:00:00",
      "02:00:00",
      null,
      "6",
      "Entrainement intensif",
      "Attention, seulement les meilleurs"
    ]
  ].map(data =>
    db.insert(
      "activities",
      [
        "sport_id",
        "creator_id",
        "activity_difficulty",
        "activity_description",
        "activity_adresse",
        "activity_city",
        "activity_latitude",
        "activity_longitude",
        "activity_start_time",
        "activity_duration",
        "activity_photo",
        "activity_max_participants",
        "activity_title",
        "activity_more_infos"
      ],
      data,
      callback
    )
  );
};

exports.down = function(db, callback) {
  return null;
};

exports._meta = {
  "version": 1
};
