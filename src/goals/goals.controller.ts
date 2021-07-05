import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Goal, GoalType } from './goal.model';
import { GoalsService } from './goals.service';
import { AddGoalDto } from './dto/add-goal.dto';

@Controller('goals')
export class GoalsController {
  constructor(private goalService: GoalsService) {}

  @Get()
  getAllGoals(): Goal[] {
    return this.goalService.getAllGoals();
  }

  @Get('/:id')
  getGoalById(@Param('id') id: string): Goal {
    return this.goalService.getGoalByID(id)
  }
    
  @Post()
  addGoal(@Body() addGoalDto: AddGoalDto): Goal {
    return this.goalService.addGoal( addGoalDto);
  }
}
