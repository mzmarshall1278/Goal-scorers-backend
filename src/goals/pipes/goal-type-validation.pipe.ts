import { BadRequestException, PipeTransform } from "@nestjs/common";
import { GoalType } from '../goal.model';

export class GoalTypeValidationPipe implements PipeTransform {

  readonly allowedTypes = [
    GoalType.CORNER,
    GoalType.FREE,
    GoalType.OWN,
    GoalType.PENALTY,
    GoalType.REGULAR
  ]
  transform(value: any) {
    value = value.toUpperCase()

    if (!this.isTypeValid(value)) {
      throw new BadRequestException('Invalid Goal Type')
    }
    return value;
  }
  private isTypeValid(type: any) {
    const indxOfTYpe = this.allowedTypes.indexOf(type);
    return indxOfTYpe !== -1;
  }
}