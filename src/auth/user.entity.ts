import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['username', 'email'])
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  async validatePassword(password: string):Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    // console.log(hash ===this.password)
    return hash === this.password;
  }
}