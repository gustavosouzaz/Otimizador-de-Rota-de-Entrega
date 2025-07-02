import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(usuario: { username: string }) {
    const payload = { username: usuario.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
