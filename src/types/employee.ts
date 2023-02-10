import { IClient } from './clientTypes';
export interface IOptions {
  procedure: string;
  price: string;
}

export interface IWorkSchedule {
  day: string;
  hours: string[];
}

export interface IWorkDays {
  day: string;
  hours: string[];
  clients: IClient[];
}

export interface IEmployee {
  _id?: string;
  name: string;
  imgPath: string;
  phoneNumber: string;
  email: string;
  position: string;
  surname: string;
  schedule: IWorkSchedule[];
  workDays?: IWorkDays[];
  options?: IOptions[];
}
