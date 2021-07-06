import { Injectable } from '@nestjs/common';
import { Goal, GoalType } from './goal.model';
import { GoalDto } from './dto/add-goal.dto';

@Injectable()
export class GoalsService {
  private goals: Goal[] = []

  getAllGoals(): Goal[] {
    return this.goals;
  }

  getFilteredGoals(search: string) {
    let goals = this.getAllGoals()
    goals = goals.filter(goal => {
      return goal.club.includes(search) ||
        goal.scorer.includes(search) ||
        goal.assist.includes(search) ||
        goal.keeper.includes(search) ||
        goal.against.includes(search) ||
        goal.type.includes(search)
    })
    return goals;
  } 


  getGoalByID(id: string) {
    return this.goals.find(goal=> goal.id === id)
  }

  addGoal(addGoalDto: GoalDto): Goal {
    const { scorer, club, assist, time, keeper, against, type } = addGoalDto;
    const goal: Goal = {
      id: ''+ Math.random(),
      club, scorer, assist, time, keeper, type, against
    }
    this.goals.push(goal);
    return goal;
  }

  deleteGoal(id: string): void {
    this.goals = this.goals.filter(goal => goal.id !== id);
  }

}
