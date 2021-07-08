import {IsIn, IsNotEmpty} from 'class-validator'

import { GoalType } from '../goal-type.enum';
export class GoalDto{
  @IsNotEmpty()
  club: string;

  @IsNotEmpty()
  scorer: string;

  assist: string;

  @IsNotEmpty()
  time: string;

  @IsNotEmpty()
  keeper: string;

  @IsNotEmpty()
  against: string;
}