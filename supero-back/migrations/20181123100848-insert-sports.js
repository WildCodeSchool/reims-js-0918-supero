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
  db.insert("sports", ["sport_name"], ["running"], callback);
  db.insert("sports", ["sport_name"], ["vélo"], callback);
  db.insert("sports", ["sport_name"], ["natation"], callback);
  db.insert("sports", ["sport_name"], ["musculation"], callback);
  db.insert("sports", ["sport_name"], ["autres sports ext."], callback);
  db.insert("sports", ["sport_name"], ["autres sports int."], callback);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1
};
