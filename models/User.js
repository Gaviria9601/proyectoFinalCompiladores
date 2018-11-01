let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserShema = Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 10,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false
});

module.exports = moongoose.model('User', UserShema);
