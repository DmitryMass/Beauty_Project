export interface IOptions {
  procedure: string;
  price: string;
}
export interface IEmployee {
  _id?: string;
  name: string;
  imgPath: string;
  phoneNumber: string;
  email: string;
  position: string;
  surname: string;
  schedule: any[];
  workDays?: any[];
  options?: IOptions[];
}
