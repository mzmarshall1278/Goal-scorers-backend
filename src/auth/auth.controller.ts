import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { AuthService } from './auth.service';
import { loginCredentialsDto } from './dto/login-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ){}
  @Post('/signup')
  signUp(@Body(ValidationPipe) signupCredentials: SignupCredentialsDto) {
    return this.authService.signUp(signupCredentials);
  }

  @Post('/login')
  login(@Body(ValidationPipe) loginCredentials: loginCredentialsDto) {
    return this.authService.login(loginCredentials);
  }
}

