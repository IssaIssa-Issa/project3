module.exports = function (sequelize, DataTypes) {

	// Creates a "Transactions" model that matches up with DB
	var Transactions = sequelize.define("Transactions", {
	transaction_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
        amount: DataTypes.DECIMAL,
        admin_id: DataTypes.INTEGER,
        child_id: DataTypes.INTEGER,
		admin_comments: DataTypes.STRING,
		date: DataTypes.DATEONLY,
		updatedAt: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		createdAt:
		{
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
	},
	{
	  tableName: "transactions"
	}
	);
  
	// Makes the transactions model available for other files (will also create a table)
	return Transactions;
  }