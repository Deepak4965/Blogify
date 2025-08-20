const JWT=require('jsonwebtoken')

const secret='IronMan@123';

function createTokenForUser(user){
    const payload={
        _id: user._id,
        
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role,
    }

    const token=JWT.sign(payload,secret)
    return token;
}

function vaildateToken(token){
    const payload=JWT.verify(token,secret)
    return payload
}

module.exports={createTokenForUser,vaildateToken}