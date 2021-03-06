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
    "users",
    {
      user_id: { type: "int", primaryKey: true, autoIncrement: true },
      user_lastname: "string",
      user_firstname: "string",
      user_gender: "string",
      user_pseudo: "string",
      user_birthdate: "date",
      user_email: { type: "string", unique: true },
      user_password: "string",
      user_photo: "string",
      user_level: "int",
      user_about: "string"
    },
    callback
  );
};

exports.down = function(db) {
  return db.dropTable("users");
};

exports._meta = {
  "version": 1
};
