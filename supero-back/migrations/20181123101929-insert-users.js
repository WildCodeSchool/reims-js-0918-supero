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
    "users",
    [
      "user_lastname",
      "user_firstname",
      "user_pseudo",
      "user_birthdate",
      "user_email",
      "user_password",
      "user_photo",
      "user_level"
    ],
    [
      "Niveau",
      "Benoît",
      "Benoit1521",
      "1980-10-07",
      "zertyuio@hotmail.fr",
      "tutjyujt",
      "photo",
      "3"
    ],
    callback
  );
  db.insert(
    "users",
    [
      "user_lastname",
      "user_firstname",
      "user_pseudo",
      "user_birthdate",
      "user_email",
      "user_password",
      "user_photo",
      "user_level"
    ],
    [
      "Raymond",
      "Fabien",
      "vortex",
      "1990-08-09",
      "wsdrtyuik@gmail.com",
      "sdfghjk",
      "photo",
      "5"
    ],
    callback
  );
  db.insert(
    "users",
    [
      "user_lastname",
      "user_firstname",
      "user_pseudo",
      "user_birthdate",
      "user_email",
      "user_password",
      "user_photo",
      "user_level"
    ],
    [
      "Da Silva",
      "Quentin",
      "quentinds",
      "1995-08-02",
      "pkjuyr@live.fr",
      "zertyui",
      "photo",
      "1"
    ],
    callback
  );
  db.insert(
    "users",
    [
      "user_lastname",
      "user_firstname",
      "user_pseudo",
      "user_birthdate",
      "user_email",
      "user_password",
      "user_photo",
      "user_level"
    ],
    [
      "Guerre",
      "Robin",
      "r00k1E",
      "1990-03-21",
      "xwsrfyujho@hotmail.fr",
      "oiuytfrd",
      "photo",
      "2"
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
