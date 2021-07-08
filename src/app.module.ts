import { Module } from '@nestjs/common';
import { GoalsModule } from './goals/goals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GoalsModule,
  ],
})
export class AppModule {}
