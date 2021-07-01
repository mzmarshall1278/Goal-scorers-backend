import { Injectable } from '@nestjs/common';
import { Goal } from './goal.model';

@Injectable()
export class GoalsService {
  private goals: Goal[] = []

  getAllGoals(): Goal[] {
    return this.goals;
  }
}
