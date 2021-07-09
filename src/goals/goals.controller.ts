import { Goal } from './goal.entity';
import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { GoalDto } from './dto/add-goal.dto';
import { GoalTypeValidationPipe } from './pipes/goal-type-validation.pipe';
import { GoalType } from './goal-type.enum';
import { FilterGoalDto } from './dto/filter-goals.dto';

@Controller('goals')
export class GoalsController {
  constructor(private goalService: GoalsService) {}

  @Get()
  getAllGoals(
    @Query('search', ValidationPipe) search: string,
    @Query('type', GoalTypeValidationPipe) type: GoalType
  )
  {
    return this.goalService.getGoals(search, type) 
  }

  @Get('/:id')
  getGoalById(@Param('id', ParseIntPipe ) id: number): Promise<Goal> {
    return this.goalService.getGoalByID(id);
  }
    
  @Post()
   @UsePipes(ValidationPipe) 
  addGoal(@Body() addGoalDto: GoalDto, @Body('type', GoalTypeValidationPipe) type: GoalType): Promise<Goal> {
    return this.goalService.addGoal( addGoalDto, type);
  }

  @Delete('/:id')
  deleteGoal(@Param('id') id: number): object {
    this.goalService.deleteGoal(id);
    return {message: "deleted successfully"}
  }
}
