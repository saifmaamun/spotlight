import { model, Schema, Types } from 'mongoose';
import { TCustomer } from './Customer.interface';

const ArtistSchema = new Schema({
  name: { type: String, required: true },
});

export const Artist = model('Artist', ArtistSchema);

// Define TPub Schema
const PubSchema = new Schema({
  name: { type: String, required: true },
});

export const Pub = model('Pub', PubSchema);

// Define TPayment Schema
const PaymentSchema = new Schema({
  ticket: { type: Number, required: true },
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['success', 'failed', 'pending'],
    required: true,
  },
});

export const Payment = model('Payment', PaymentSchema);

// Define TShow Schema with references to Artist and Pub
const ShowSchema = new Schema({
  artist: { type: Types.ObjectId, ref: 'Artist', required: true },
  pub: { type: Types.ObjectId, ref: 'Pub', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  payment: { type: PaymentSchema, required: true },
});

export const Show = model('Show', ShowSchema);

const CustomerSchema = new Schema<TCustomer>({
  role: { type: String, default: 'Customer', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  show: { type: ShowSchema, required: false },
});

export const Customer = model<TCustomer>('Customer', CustomerSchema);
