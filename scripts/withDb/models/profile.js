

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "profile",
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
      mobile : {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      date_of_creation: {
        type: DataTypes.DATE,
      }
    },
    {
      tableName: "profile",
      timestamps: false,
    }
  );
  return Profile;
};