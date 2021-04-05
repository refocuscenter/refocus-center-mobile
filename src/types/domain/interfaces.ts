import {Unit} from './enums';

export interface User {
  id: number;
  displayName: string;
  profilePhoto: string;
  token: string;
  userAccountInStore: UserAccountStore[];
}

export interface UserAccountStore {
  balance: number;
  store: Store;
  basket: Basket;
}

export interface Basket {
  totalValue?: number;
  portions: Portion[];
}

/**
 * Aquilo que se oferece (serviço ou produto)
 * What is offered (service or product)
 */
export interface Offer {
  name: string;
  image: string;
  value: number;
}

export interface Combo<Offer> {
  name: string;
  value: number;
  offers: Offer[];
}

export interface Portion {
  portion: number;
  offer: Offer;
}

export interface Product extends Offer {}

export interface Service extends Offer {}

export interface OfferCategory {
  offer: Offer;
  categories: string[];
}

export interface UnitStore {
  id: number;
  name?: string;
  image?: string;
  // openingIntervals: WeekOpeningIntervals
  store: Store;
  // history: Extract[]
}

export interface Store {
  id: number;
  name: string;
  sector: string;
  image: string;
}

export interface WeekOpeningIntervals {
  sunday: OpeningInterval;
  monday: OpeningInterval;
  tuesday: OpeningInterval;
  wednesday: OpeningInterval;
  thursday: OpeningInterval;
  friday: OpeningInterval;
  saturday: OpeningInterval;
}

export interface OpeningInterval {
  openingHour: string;
  closeHour: string;
}

export interface HighlightScreen {
  image: string;
  title: string;
  unitStore: UnitStore;
}

export interface Extract {
  type: number;
  value: number;
  date: Date;
}
