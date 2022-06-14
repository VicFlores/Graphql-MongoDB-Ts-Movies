import { AuthenticationError } from 'apollo-server-core';
import * as jose from 'jose';

interface Ipayload {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

export const generateToken = async (id: string, email: string) => {
  const token = await new jose.SignJWT({ sub: id, email: email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  return token;
};

export const verifyAuth = async (token: string) => {
  if (!token) {
    throw new AuthenticationError('Unauthorized');
  }
  const verified = await jose.jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );
  return verified.payload as unknown as Ipayload;
};
