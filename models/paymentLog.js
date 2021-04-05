const Sequelize = require('sequelize');

module.exports = class PaymentLog extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        status: { type: Sequelize.STRING, allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW'),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'PaymentLog',
        tableName: 'paymentLogs',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        dialectOptions: {
          dateStrings: true,
          typeCast: true,
        },
      },
    );
  }

  static associate(db) {
    db.PaymentLog.belongsTo(db.Club);
    db.PaymentLog.belongsTo(db.User);
  }
};