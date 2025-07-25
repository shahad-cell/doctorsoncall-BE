// src/types/express.d.ts
declare namespace Express {
  export interface Request {
    user?: {
      id: string;
      role?: string;
      [key: string]: any;
    };
  }
}
