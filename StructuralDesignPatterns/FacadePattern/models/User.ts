import { Post } from './Post';
import { ToDo } from './ToDo';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
  company: Company;
  posts: Post[];
  todos: ToDo[];
}
