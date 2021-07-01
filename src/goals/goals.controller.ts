import { Controller, Get } from '@nestjs/common';
import { Goal } from './goal.model';
import { GoalsService } from './goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private goalService: GoalsService) {}

  @Get()
  getAllGoals(): Goal[] {
    return this.goalService.getAllGoals();
  }
}
