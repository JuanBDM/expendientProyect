module.exports =(sequelize, DataTypes)=>{
    let alias = "User";
    let cols={
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
        },
        
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    
    }
    let config = {
        tablename: 'users',
        timestamps: false
    }
        
    const User = sequelize.define(alias, cols, config);
    User.associate= function(models){
        User.hasMany(models.Expediente, {
            as: 'expedientes',
            foreignKey: 'user_id'
        })
    }
    return User
    }