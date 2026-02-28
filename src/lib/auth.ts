import { SignJWT, jwtVerify } from 'jose';
import { createHmac } from 'crypto';

const secretStr = process.env.JWT_SECRET || '750aa9bd';
const secret = new TextEncoder().encode(secretStr);

export async function signToken(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(secret);
}

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (error) {
        return null;
    }
}

export function encryptPin(pin: string) {
    return createHmac('sha256', secretStr)
        .update(pin)
        .digest('hex');
}
