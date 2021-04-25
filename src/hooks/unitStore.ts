import {useQuery} from 'react-query';
import {UnitStoreAPI} from '../api/unitStore';

export const useUnitStore = (unitStoreId: number) => {
  return useQuery([`unit-store`, unitStoreId], () =>
    UnitStoreAPI.getOne(unitStoreId),
  );
};
