import { RaRecord } from 'react-admin';

export interface User extends RaRecord {
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export interface Post extends RaRecord {
  userId: number;
  title: string;
  body: string;
}
