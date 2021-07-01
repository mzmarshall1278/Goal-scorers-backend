import * as request from 'supertest';
export interface Goal {
  id: string;
  club: string;
  scorer: string;
  assist: string;
  timeStamp: string;
  keeper: string;
  type: goalType
}

export enum goalType {
  REGULAR = `REGULAR`,
  CORNER = `CORNER`,
  FREE = `FREE KICK`,
  PENALTY = `PENALTY`,
  OWN = `OWN GOAL`
    
}