import * as request from 'supertest';
export interface Goal {
  id: string;
  club: string;
  scorer: string;
  assist: string;
  time: string;
  keeper: string;
  type: GoalType
}

export enum GoalType {
  REGULAR = `REGULAR`,
  CORNER = `CORNER`,
  FREE = `FREE KICK`,
  PENALTY = `PENALTY`,
  OWN = `OWN GOAL`
    
}