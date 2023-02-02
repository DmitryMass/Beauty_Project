// CreateGroup
export interface ICreateGroupInitialValue {
  countPlaces: string;
  type: string;
  price: string;
  whenStart?: string;
}

export interface IGroup {
  _id?: string;
  countPlaces: string;
  type: string;
  price: string;
  whenStart?: string;
  members?: any[];
}
