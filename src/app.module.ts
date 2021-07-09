import { Module } from '@nestjs/common';
import { GoalsModule } from './goals/goals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GoalsModule,
    AuthModule,
  ],
})
export class AppModule {}
