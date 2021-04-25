import {useQuery} from 'react-query';
import {UserAccountStoreAPI} from '../api/userAccountStore';

export const useUserAccountStore = (idUser: number, idStore: number) => {
  return useQuery([`unit-store`, idUser, idStore], () =>
    UserAccountStoreAPI.getOne(idUser, idStore),
  );
};
