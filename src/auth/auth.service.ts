import { UserRepository } from './user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { loginCredentialsDto } from './dto/login-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) { }
  
  async signUp(signupCredentials: SignupCredentialsDto): Promise<void> {
    return this.userRepository.signUp(signupCredentials);
  }

  async login(credentials: loginCredentialsDto) {
    const username = await this.userRepository.validatePassword(credentials);
    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
  }
}
