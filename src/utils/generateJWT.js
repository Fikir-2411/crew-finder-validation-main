import jwt from 'jsonwebtoken'

export const generateJWT = (id) => {
    return jwt.sign({
        id,
    }, process.env.SECRET_KEY)
}
