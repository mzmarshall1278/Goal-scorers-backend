import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Goal, GoalType } from './goal.model';
import { GoalsService } from './goals.service';
import { GoalDto } from './dto/add-goal.dto';
import { GoalTypeValidationPipe } from './pipes/goal-type-validation.pipe';

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
    const found = this.goalService.getGoalByID(id);
    if (!found) {
      throw new NotFoundException("This goal could not be found")
    }
    return found;
  }
    
  @Post()
   @UsePipes(ValidationPipe) 
  addGoal(@Body() addGoalDto: GoalDto, @Body('type', GoalTypeValidationPipe) type: GoalType): Goal {
    return this.goalService.addGoal( addGoalDto, type);
  }

  @Delete('/:id')
  deleteGoal(@Param('id') id:string): object {
    this.goalService.deleteGoal(id);
    return {message: "deleted successfully"}
  }
}
