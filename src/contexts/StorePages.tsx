import {createContext} from 'react';
import {UseQueryResult} from 'react-query';
import {
  Basket,
  OfferXorCombo,
  UnitStore,
  UserAccountStore,
} from '../types/domain/interfaces';

export interface StorePagesData {
  unitStoreQuery: UseQueryResult<UnitStore>;
  unitStoreOffersQuery: UseQueryResult<OfferXorCombo[]>;
  userAccountStoreQuery: UseQueryResult<UserAccountStore>;
  basketQuery: UseQueryResult<Basket>;
}

export const StorePagesContext = createContext<StorePagesData>(
  {} as StorePagesData,
);
