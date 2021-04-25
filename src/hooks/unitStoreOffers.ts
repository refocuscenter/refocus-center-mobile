import {useQuery} from 'react-query';
import {UnitStoreOffersAPI} from '../api/unitStoreOffers';

export const useUnitStoreOffers = (unitStoreId: number) => {
  return useQuery([`unit-store-offers`, unitStoreId], () =>
    UnitStoreOffersAPI.getAll(unitStoreId),
  );
};
