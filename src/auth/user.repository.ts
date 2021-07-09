import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User>{
  async signUp(credentials: SignupCredentialsDto):Promise<void> {
    const { email, username, password } = credentials;

    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;

    await user.save()
  }
}