import { GoalType } from '../goal.model';
export class GoalDto{
  club: string;
  scorer: string;
  assist: string;
  time: string;
  keeper: string;
  against: string;
  type: GoalType;
}