"use strict";

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
    [
      "2",
      "3",
      "4",
      "Le vélo, c'est pas pour les animaux",
      "31, rue sans issue",
      "Reims",
      "49.282315",
      "4.015795",
      "2018-11-25 18:00:00",
      "1",
      "photo",
      "3",
      "Le Tour de Reims",
      "...plus raisonnable que le Tour de France"
    ],
    callback
  );
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
    [
      "3",
      "4",
      "1",
      "Jetez-vous dans le bain",
      "12, rue de Lorem Ipsum",
      "Reims",
      "49.282315",
      "4.015795",
      "2018-11-25 18:00:00",
      "1",
      "photo",
      "3",
      "Le Grand Bleu x(",
      "Appellez les maîtres nageurs vite svp"
    ],
    callback
  );
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
    [
      "1",
      "1",
      "3",
      "Pour aider Florentin",
      "12, rue de Lorem Ipsum",
      "Reims",
      "49.282315",
      "4.015795",
      "2018-11-25 18:00:00",
      "1",
      "photo",
      "3",
      "Entrainement Run-In-Reims",
      "Courrez, pauvres fous !"
    ],
    callback
  );
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1
};
