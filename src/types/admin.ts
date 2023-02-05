// CreateGroup
export interface ICreateGroupInitialValue {
  countPlaces: string;
  price: string;
  whenStart?: string;
  type?: string;
}

export interface IGroup {
  _id?: string;
  countPlaces: string;
  type: string;
  price: string;
  whenStart?: string;
}

export interface IMembers {
  email: string;
  name: string;
  phoneNumber: string;
  type: string;
  whenStart: string;
}

export interface IGroupmembers {
  groupId: string;
  type: string;
  whenStart: string;
  _id?: string;
  members: IMembers[];
}
