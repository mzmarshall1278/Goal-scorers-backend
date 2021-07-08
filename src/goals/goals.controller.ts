import { Goal } from './goal.entity';
import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { GoalDto } from './dto/add-goal.dto';
import { GoalTypeValidationPipe } from './pipes/goal-type-validation.pipe';
import { GoalType } from './goal-type.enum';

@Controller('goals')
export class GoalsController {
  constructor(private goalService: GoalsService) {}

  // @Get()
  // getAllGoals(): Goal[] {
  //   return this.goalService.getAllGoals();
  // }

  // @Get('/search')
  // getFilteredGoals(@Query('search') search: string) {
  //   // console.log(search)
  //   return this.goalService.getFilteredGoals(search)
  // }

  @Get('/:id')
  getGoalById(@Param('id', ParseIntPipe ) id: number): Promise<Goal> {
    return this.goalService.getGoalByID(id);
  }
    
  @Post()
   @UsePipes(ValidationPipe) 
  addGoal(@Body() addGoalDto: GoalDto, @Body('type', GoalTypeValidationPipe) type: GoalType): Promise<Goal> {
    return this.goalService.addGoal( addGoalDto, type);
  }

  // @Delete('/:id')
  // deleteGoal(@Param('id') id:string): object {
  //   this.goalService.deleteGoal(id);
  //   return {message: "deleted successfully"}
  // }
}
