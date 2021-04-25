import {user} from '../mocks/user';
import {UserAccountStore} from '../types/domain/interfaces';

process.env.MOCK_API = 'true';
const {MOCK_API, URL_API} = process.env;

export const UserAccountStoreAPI = {
  getOne: async (
    idUser: number,
    idStore: number,
  ): Promise<UserAccountStore> => {
    if (MOCK_API === 'true') {
      return user.userAccountInStore[0];
    } else {
      return await fetch(`${URL_API}/user/${idUser}/store/${idStore}`).then(v =>
        v.json(),
      );
    }
  },
};
