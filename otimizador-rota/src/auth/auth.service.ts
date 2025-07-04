import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(username: string): { access_token: string } {
    const payload = { username };
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }
}
