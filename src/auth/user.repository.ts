import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { loginCredentialsDto } from './dto/login-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User>{
  async signUp(credentials: SignupCredentialsDto):Promise<void> {
    const { email, username, password } = credentials;

    const user = new User();
    user.username = username;
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    console.log(user.password)
    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('username or email already exists');
      }
      throw new InternalServerErrorException()
    }
  }

  async validatePassword(credentials: loginCredentialsDto) {
    const { username, password } = credentials;
    const user = await this.findOne({ username });

    if (user && await user.validatePassword(password)) {
      return user.username;
    } else {
      return null;
      //auth failed
    }
  }

  private async hashPassword(password:string, salt: string):Promise<string> {
    return bcrypt.hash(password, salt)
  }
}