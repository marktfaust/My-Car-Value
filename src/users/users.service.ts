import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async create(email: string, password: string) {
    return {
      message: 'Successfully created user',
      email,
      password,
    };
  }
}
