import { Goal } from './goal.entity';
import { EntityRepository, Repository } from "typeorm";
import { GoalDto } from './dto/add-goal.dto';
import { GoalType } from './goal-type.enum';
import { FilterGoalDto } from './dto/filter-goals.dto';


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
  async getGoals(search: string, type: GoalType) {
    const query = this.createQueryBuilder('goal');

    if (type) {
      query.andWhere('goal.type LIKE :type', {type})
    }

    if (search) {
      query.andWhere('(goal.club LIKE :search OR goal.scorer Like :search OR goal.assist LIKE :search OR goal.against LIKE :search OR goal.keeper LIKE :search)', { search: `%${search}%` });
    }
    const goals = await query.getMany();
    return goals;
  }
}