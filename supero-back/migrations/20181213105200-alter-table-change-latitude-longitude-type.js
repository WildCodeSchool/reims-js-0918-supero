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
  db.runSql(
    `ALTER TABLE activities MODIFY COLUMN activity_longitude DECIMAL (10,6)`,
    callback
  );
  db.runSql(
    `ALTER TABLE activities MODIFY COLUMN activity_latitude DECIMAL (10,6)`,
    callback
  );
};

exports.down = function(db, callback) {
  db.runSql(
    `ALTER TABLE activities MODIFY COLUMN activity_longitude INT`,
    callback
  );
  db.runSql(
    `ALTER TABLE activities MODIFY COLUMN activity_latitude INT`,
    callback
  );
};

exports._meta = {
  version: 1
};
