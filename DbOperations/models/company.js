

module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define(
      "company",
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        }
      },
      {
        tableName: "company",
        timestamps: false,
      }
    );
    return Company;
  };