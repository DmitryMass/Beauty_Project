export interface IRequirements {
  require: string;
}

export interface IConditions {
  condition: string;
}

export interface IVacancy {
  _id?: string;
  vacancy: string;
  requirements: IRequirements[];
  conditions: IConditions[];
}
