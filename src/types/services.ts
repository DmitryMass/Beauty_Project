export interface IServicesOptions {
  title: string;
  subtitle: string;
  price: string;
}

export interface IServices {
  _id?: string;
  procedure: string;
  options: IServicesOptions[];
}
