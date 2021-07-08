import { Goal } from './goal.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoalDto } from './dto/add-goal.dto';
import { GoalRepository } from './goal.repository';
import { GoalType } from './goal-type.enum';

@Injectable()
export class GoalsService {
  constructor(
    @InjectRepository(GoalRepository)
    private goalRepository: GoalRepository
  ) {}

  // getAllGoals(): Goal[] {
  //   return this.goals;
  // }

  // getFilteredGoals(search: string) {
  //   let goals = this.getAllGoals()
  //   goals = goals.filter(goal => {
  //     return goal.club.includes(search) ||
  //       goal.scorer.includes(search) ||
  //       goal.assist.includes(search) ||
  //       goal.keeper.includes(search) ||
  //       goal.against.includes(search) ||
  //       goal.type.includes(search)
  //   })
  //   return goals;
  // } 

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
  

  // deleteGoal(id: string): void {
  //   this.goals = this.goals.filter(goal => goal.id !== id);
  // }

}
