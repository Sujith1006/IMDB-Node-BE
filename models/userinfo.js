'use strict';
module.exports = (sequelize, DataTypes) => {
  const userinfo = sequelize.define('userinfo', {
    username: DataTypes.STRING,
    Email:DataTypes.STRING,
    password:DataTypes.STRING
  }, {});
  userinfo.associate = function(models) {
    // associations can be defined here
  };
  return userinfo;
};