//
//
const { Schema, model } = require('mongoose')
    //utilizamos el módulo de mongoose para evaluar que el email sea único
const uniqueValidator = require('mongoose-unique-validator')

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}

//Al requerir solo Schema y model ya no es necesario asignar a una variable Schema
//let Schema = mongoose.Schema

let usuarioShema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

})

usuarioShema.methods.toJSON = function() {

    let user = this
    let userObject = user.toObject()
    delete userObject.password
    return userObject

}

usuarioShema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' })

module.exports = model('Usuario', usuarioShema);
//module.exports = mongoose.model('Usuario', usuarioShema)