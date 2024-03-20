import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { Public } from './public.decorator';
import { AuthService } from './auth.service';
import { HttpExceptionFilter } from 'src/filter/http-exception-filter/http-exception.filter';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  @UseFilters(new HttpExceptionFilter())
  async login(@Body() dto: any) {
    await this.authService.login(dto.username, dto.password);
    return 'ok';
  }
}
