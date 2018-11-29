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
  db.runSql(`UPDATE activities SET activity_title = "Course passionnée", activity_more_infos = "Coooouuuuuurs ! Coooouuuuurs !" WHERE activity_id = 1`, callback);
  db.runSql(`UPDATE activities SET activity_title = "Nage comme un mage", activity_more_infos = "ça vit dans l'eau" WHERE activity_id = 2`, callback);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
