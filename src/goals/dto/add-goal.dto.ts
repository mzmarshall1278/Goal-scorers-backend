import { GoalType } from '../goal.model';
export class AddGoalDto{
  club: string;
  scorer: string;
  assist: string;
  time: string;
  keeper: string;
  against: string;
  type: GoalType;
}