import { Module } from '@nestjs/common';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalRepository } from './goal.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([GoalRepository]),
  ],
  controllers: [GoalsController],
  providers: [GoalsService]
})
export class GoalsModule {}
