import { Goal } from './goal.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoalDto } from './dto/add-goal.dto';
import { GoalRepository } from './goal.repository';
import { GoalType } from './goal-type.enum';
import { FilterGoalDto } from './dto/filter-goals.dto';

@Injectable()
export class GoalsService {
  constructor(
    @InjectRepository(GoalRepository)
    private goalRepository: GoalRepository
  ) { }
  
  async getGoals(search: string, type: GoalType): Promise<Goal[]> {
    const result = await this.goalRepository.getGoals(search, type);
    return result;
  }

  async getGoalByID(id: number): Promise<Goal> {
    const found = await this.goalRepository.findOne(id);

    if (!found) {
      throw new NotFoundException('The goal could not be found!');
    }
    return found;
    }

  async addGoal(addGoalDto: GoalDto, type: GoalType): Promise<Goal> {
    return this.goalRepository.addGoal(addGoalDto, type);
  }
  
  async deleteGoal(id: number):Promise<void> {
    const result = await this.goalRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('The goal could not be found!');
    }
  }
 
}
