import Sequelize from 'sequelize';

export default class Club extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: { type: Sequelize.STRING, allowNull: false },
        summary: { type: Sequelize.STRING, allowNull: false },
        place: { type: Sequelize.STRING, allowNull: false },
        price: { type: Sequelize.INTEGER, allowNull: false },
        description: { type: Sequelize.STRING, allowNull: false },
        topic: { type: Sequelize.STRING, allowNull: false },
        startDate: Sequelize.DATE,
        endDate: Sequelize.DATE,
        day: { type: Sequelize.STRING, allowNull: false },
        limitUserNumber: { type: Sequelize.INTEGER, allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW'),
        },
        updatedAt: { type: Sequelize.DATE, allowNull: true },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Club',
        tableName: 'clubs',
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
    db.Club.belongsTo(db.Master);
    db.Club.belongsToMany(db.User, {
      through: 'Bookmark',
      foreignKey: 'ClubId',
    });
    db.Club.hasMany(db.PaymentLog);
  }
}