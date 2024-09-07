import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (token) {
      // Verify token here
      // If valid, attach user info to request object
      // req['user'] = decodedUser;
    }
    next();
  }
}