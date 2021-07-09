import { Body, Controller, Post } from '@nestjs/common';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ){}
  @Post('/signup')
  signUp(@Body() signupCredentials: SignupCredentialsDto) {
    return this.authService.signUp(signupCredentials);
  }
}

