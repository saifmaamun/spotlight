import { Date, Types } from 'mongoose';

// interface for Normal customer
export interface TCustomer {
  role: string;
  name: string;
  email: string;
  pass: string;
  address: string;
  phone: string;
  show: TShow;
}

export interface TShow {
  artist: TArtist;
  pub: TPub;
  date: Date;
  time: string;
  payment: TPayment;
}
export interface TArtist {
  name: string;
  id: Types.ObjectId;
}
export interface TPub {
  name: string;
  id: Types.ObjectId;
}

export interface TPayment {
  ticket: number;
  amount: number;
  status: 'success' | 'failed' | 'pending';
}
