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
      activity_difficulty: "int",
      activity_description: "text",
      activity_adresse: "string",
      activity_city: "string",
      activity_latitude: "decimal(10,6)",
      activity_longitude: "decimal(10,6)",
      activity_start_time: "datetime",
      activity_duration: "time",
      activity_photo: "string",
      activity_max_participants: "int",
      activity_creation_time: {
        type: "timestamp",
        notNull: true,
        defaultValue: new String("CURRENT_TIMESTAMP")
      },
      activity_title: "string",
      activity_more_infos: "string"
    },
    callback
  );
};

exports.down = function(db) {
  return db.dropTable("activities");
};

exports._meta = {
  "version": 1
};
