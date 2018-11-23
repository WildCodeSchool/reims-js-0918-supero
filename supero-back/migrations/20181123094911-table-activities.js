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
  return db.createTable(
    "activities",
    {
      activity_id: { type: "int", primaryKey: true, autoIncrement: true },
      sport_id: {
        type: "int",
        foreignKey: {
          name: "activities_sport_id_fk",
          table: "sports",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: "sport_id"
        }
      },
      creator_id: {
        type: "int",
        foreignKey: {
          name: "activities_creator_id_fk",
          table: "users",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: "user_id"
        }
      },
      difficulty: "int",
      activity_description: "text",
      adresse: "string",
      city: "string",
      latitude: "int",
      longitude: "int",
      start_time: "datetime",
      duration: "int",
      photo: "string",
      max_participants: "int",
      creation_time: "date"
    },
    callback
  );
};

exports.down = function(db, callback) {
  return db.dropTable(activities, callback);
};

exports._meta = {
  version: 1
};
