import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BookController } from './modules/book/book.controller';
import { BookModule } from './modules/book/book.module';
import { getMysqlUsernameAndPassword } from './utils';

const { username, password } = getMysqlUsernameAndPassword();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '121.37.46.166',
      port: 3306,
      username: username,
      password: password,
      database: 'vben-book-dev',
      autoLoadEntities: true,
    }),
    UserModule,
    AuthModule,
    BookModule,
  ],
  controllers: [AppController, BookController],
  providers: [AppService],
})
export class AppModule {}
