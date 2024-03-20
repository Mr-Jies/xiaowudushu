import {
  Dependencies,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as md5 from 'md5';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUserName(username);
    const md5password = md5(password).toUpperCase();
    console.log(md5password, user);
    if (user.password !== md5password) {
      throw new UnauthorizedException();
    }
    const payload = {
      username: user.username,
      password: user.password,
      nickname: user.nickname,
      id: user.id,
    };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
