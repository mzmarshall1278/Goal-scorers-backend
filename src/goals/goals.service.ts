import { Injectable } from '@nestjs/common';
import { Goal, GoalType } from './goal.model';
import { v4 as uuidv4 } from 'uuid'
import { AddGoalDto } from './dto/add-goal.dto';

@Injectable()
export class GoalsService {
  private goals: Goal[] = []

  getAllGoals(): Goal[] {
    return this.goals;
  }

  getGoalByID(id: string) {
    return this.goals.find(goal=> goal.id === id)
  }

  addGoal(addGoalDto: AddGoalDto): Goal {
    const {scorer, club, assist, time, keeper, against, type} = addGoalDto
    const goal: Goal = {
      id: ''+ Math.random(),
      club, scorer, assist, time, keeper, type, against
    }
    this.goals.push(goal);
    return goal;
  }
}
