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
      "difficulty",
      "activity_description",
      "adresse",
      "city",
      "latitude",
      "longitude",
      "start_time",
      "duration",
      "photo",
      "max_participants"
    ],
    [
      "1",
      "2",
      "5",
      "Je cours avec passion",
      "12, rue de Lorem Ipsum",
      "Reims",
      "49.282315",
      "4.015795",
      "2018-11-25 18:00:00",
      "1",
      "photo",
      "3"
    ],
    callback
  );
  db.insert(
    "activities",
    [
      "sport_id",
      "creator_id",
      "difficulty",
      "activity_description",
      "adresse",
      "city",
      "latitude",
      "longitude",
      "start_time",
      "duration",
      "photo",
      "max_participants"
    ],
    [
      "3",
      "1",
      "2",
      "plouf",
      "24, avenue d'Ipsum Lorem",
      "Reims",
      "49.282315",
      "4.015795",
      "2018-11-26 16:30:00",
      "1",
      "photo",
      "3"
    ],
    callback
  );
};

exports.down = function(db, callback) {
  return null;
};

exports._meta = {
  version: 1
};
