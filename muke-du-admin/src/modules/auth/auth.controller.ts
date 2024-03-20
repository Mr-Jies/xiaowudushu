import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { Public } from './public.decorator';
import { AuthService } from './auth.service';
import { HttpExceptionFilter } from 'src/filter/http-exception-filter/http-exception.filter';
import { success } from 'src/utils';
import { error } from 'console';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  @UseFilters(new HttpExceptionFilter())
  login(@Body() dto: any) {
    return this.authService
      .login(dto.username, dto.password)
      .then((data) => success(data, '成功'))
      .catch((msg) => error(msg));
  }
}
