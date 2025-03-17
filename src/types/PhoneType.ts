import { PhoneSpecType } from './PhoneSpecType';

export type PhoneType = {
  id: number;
  name: string;
  image: string;
  specs: PhoneSpecType[];
};
