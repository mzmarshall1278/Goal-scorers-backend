import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { GoalType } from '../goal-type.enum';
export class FilterGoalDto {

  @IsOptional()
    @IsIn([GoalType.CORNER, GoalType.REGULAR, GoalType.PENALTY, GoalType.OWN, GoalType.FREE])
  search: string;

  @IsNotEmpty()
  @IsOptional()
  type: GoalType
}