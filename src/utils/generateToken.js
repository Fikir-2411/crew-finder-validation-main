import crypto from 'crypto';

export const generateToken =  () => {
    const token = crypto.randomBytes(20).toString("hex");

    const hashedToken = hashToken(token);
  
    const expiration = Date.now() + 10 * (60 * 1000); // Ten Minutes
  
    return {
        token,
        hashedToken,
        expiration
    }

  };

 export const hashToken = (token) => {
    return crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");
 }