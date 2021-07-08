import { GoalType } from './goal-type.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goal extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  club: string;

  @Column()
  scorer: string;

  @Column()
  assist: string;

  @Column()
  time: string;

  @Column()
  keeper: string;

  @Column()
  against: string;

  @Column()
  type: GoalType;

}