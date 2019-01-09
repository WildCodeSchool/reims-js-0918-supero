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
  db.createTable(
    "messages",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      activity_id: {
        type: "int",
        foreignKey: {
          name: "activity_id_has_messages_fk",
          table: "activities",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: "activity_id"
        }
      },
      user_id: {
        type: "int",
        foreignKey: {
          name: "messages_has_user_id_fk",
          table: "users",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: "user_id"
        }
      },
      message: {
        type: "text"
      }
    },
    callback
  );
};

exports.down = function(db) {
  return db.dropTable("messages");
};

exports._meta = {
  version: 1
};
