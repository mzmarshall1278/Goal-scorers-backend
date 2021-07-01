import { Injectable } from '@nestjs/common';
import { Goal, GoalType } from './goal.model';
import * as uuid from 'uuid'

@Injectable()
export class GoalsService {
  private goals: Goal[] = []

  getAllGoals(): Goal[] {
    return this.goals;
  }

  addGoal(club: string, scorer: string, assist: string, time: string, keeper: string, type: GoalType): Goal {
    const goal: Goal = {
      id: uuid(),
      club, scorer, assist, time, keeper, type
    }
    this.goals.push(goal);
    return goal;
  }
}
