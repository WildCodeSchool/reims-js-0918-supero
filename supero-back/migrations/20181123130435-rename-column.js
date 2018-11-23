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
  db.renameColumn("activities", "difficulty", "activity_difficulty", callback);
  db.renameColumn("activities", "adresse", "activity_adresse", callback);
  db.renameColumn("activities", "city", "activity_city", callback);
  db.renameColumn("activities", "latitude", "activity_latitude", callback);
  db.renameColumn("activities", "longitude", "activity_longitude", callback);
  db.renameColumn("activities", "start_time", "activity_start_time", callback);
  db.renameColumn("activities", "duration", "activity_duration", callback);
  db.renameColumn("activities", "photo", "activity_photo", callback);
  db.renameColumn(
    "activities",
    "max_participants",
    "activity_max_participants",
    callback
  );
  db.renameColumn(
    "activities",
    "creation_time",
    "activity_creation_time",
    callback
  );
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1
};
