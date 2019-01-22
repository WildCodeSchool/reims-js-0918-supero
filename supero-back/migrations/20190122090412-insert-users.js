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
      "Niveau",
      "Benoît",
      "Homme",
      "Benoit1521",
      "1980-10-07",
      "be.niveau@hotmail.fr",
      "$2b$10$dmcmUtoSaNkIRvXe3S3cx.zhHN97WtbX6MChbSNrDcqYhuG3UN.OK",
      "logo.png",
      "3",
      "Plus d'infos perso..."
    ],
    [
      "Raymond",
      "Fabien",
      "Homme",
      "vortex",
      "1990-08-09",
      "voortexxx@gmail.com",
      "$2b$10$dmcmUtoSaNkIRvXe3S3cx.zhHN97WtbX6MChbSNrDcqYhuG3UN.OK",
      "logo.png",
      "5",
      "Plus d'infos perso..."
    ],
    [
      "Da Silva",
      "Quentin",
      "Homme",
      "quentinds",
      "1995-08-02",
      "quentin_51@live.fr",
      "$2b$10$dmcmUtoSaNkIRvXe3S3cx.zhHN97WtbX6MChbSNrDcqYhuG3UN.OK",
      "logo.png",
      "1",
      "Plus d'infos perso..."
    ],
    [
      "Guerre",
      "Robin",
      "Homme",
      "Sheoo",
      "1990-03-21",
      "rb.guerre@gmail.com",
      "$2b$10$dmcmUtoSaNkIRvXe3S3cx.zhHN97WtbX6MChbSNrDcqYhuG3UN.OK",
      "logo.png",
      "2",
      "Plus d'infos perso..."
    ]
  ].map(data =>
    db.insert(
      "users",
      [
        "user_lastname",
        "user_firstname",
        "user_gender",
        "user_pseudo",
        "user_birthdate",
        "user_email",
        "user_password",
        "user_photo",
        "user_level",
        "user_about"
      ],
      data,
      callback
    )
  );
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
