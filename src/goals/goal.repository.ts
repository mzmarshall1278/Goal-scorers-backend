import { Goal } from './goal.entity';
import { EntityRepository, Repository } from "typeorm";
import { GoalDto } from './dto/add-goal.dto';
import { GoalType } from './goal-type.enum';


@EntityRepository(Goal)
export class GoalRepository extends Repository<Goal> {

  async addGoal(goalDto: GoalDto, type: GoalType): Promise<Goal> {
    const { scorer, club, assist, time, keeper, against } = goalDto;
    const goal = new Goal();
    goal.scorer = scorer;
    goal.club = club;
    goal.assist = assist;
    goal.time = time;
    goal.against = against;
    goal.keeper = keeper;
    goal.type = type;
    await goal.save()

    return goal;
  }
}