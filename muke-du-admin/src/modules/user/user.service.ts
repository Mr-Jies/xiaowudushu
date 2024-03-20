import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findOneById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(dto: CreateUserDto): Promise<User> {
    const user = new User();
    user.nickname = dto.nickname;
    user.username = dto.username;
    user.password = dto.password;
    user.avatar = dto.avatar;
    user.role = dto.role;
    user.active = 1;

    return this.userRepository.save(user);
  }

  deleteById(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }

  findByUserName(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }
}
