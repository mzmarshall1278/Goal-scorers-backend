import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) { }
  
  async signUp(signupCredentials: SignupCredentialsDto): Promise<void> {
    return this.userRepository.signUp(signupCredentials);
  }
}
