module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "project",
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
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "project",
      timestamps: false,
    }
  );
  return Project;
};
