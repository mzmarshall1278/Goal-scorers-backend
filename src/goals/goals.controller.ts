import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { Goal, GoalType } from './goal.model';
import { GoalsService } from './goals.service';
import { GoalDto } from './dto/add-goal.dto';

@Controller('goals')
export class GoalsController {
  constructor(private goalService: GoalsService) {}

  @Get()
  getAllGoals(): Goal[] {
    return this.goalService.getAllGoals();
  }

  @Get('/search')
  getFilteredGoals(@Query('search') search: string) {
    // console.log(search)
    return this.goalService.getFilteredGoals(search)
  }

  @Get('/:id')
  getGoalById(@Param('id') id: string): Goal {
    return this.goalService.getGoalByID(id)
  }
    
  @Post()
  addGoal(@Body() addGoalDto: GoalDto): Goal {
    return this.goalService.addGoal( addGoalDto);
  }

  @Delete('/:id')
  deleteGoal(@Param('id') id:string): object {
    this.goalService.deleteGoal(id);
    return {message: "deleted successfully"}
  }
}
