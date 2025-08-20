const { createHmac, randomBytes } = require("crypto")  //buit-in package

const { Schema, model } = require('mongoose');
const { createTokenForUser } = require("../services/authentication");

//Define the user Schema

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String,

    },
    password: {
        type: String,
        required: true
    },
    profileImageURL: {
        type: String,
        default: "/images/default.png"

    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },


}, { timestamps: true }
)
//Hash Password Logic
userSchema.pre('save', function (next) {
    const user = this; //this is the current user

    if (!user.isModified('password')) return;

    const salt = randomBytes(16).toString();
    const hashPassword = createHmac('sha256', salt).update(user.password).digest('hex')

    this.salt = salt;
    this.password = hashPassword;


    next();
})

userSchema.static('matchPasswordAndGenerateToken', async function (email, password) {
    const user = await this.findOne({ email })
    if (!user) throw new Error('User not found');
    console.log(user);


    const salt = user.salt;
    const hashPassword = user.password

    const userProvidedHash = createHmac('sha256', salt).update(password).digest('hex')

    if (hashPassword !== userProvidedHash)
        throw new Error('Incorrect Password')

    const token = createTokenForUser(user)
    return token
})


const user = model('user', userSchema)

module.exports = user