const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize){
    return super.init({
      id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      salt: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      pw: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      enabled: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      updatedAt: {
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW,
      },
      createdAt: {
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'sequelize_table',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {}
};