import type { JwtPayload } from 'jsonwebtoken';

export type TokenPayload = JwtPayload & { id: string };
