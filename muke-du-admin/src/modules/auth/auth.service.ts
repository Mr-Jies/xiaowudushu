import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as md5 from 'md5';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(username: string, password: string) {
    const user = await this.userService.findByUserName(username);
    const md5password = md5(password).toUpperCase();
    console.log(md5password, user);
    if (user.password !== md5password) {
      throw new UnauthorizedException();
    }
    // return user;
  }
}
