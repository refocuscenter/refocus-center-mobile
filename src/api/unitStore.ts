import {kitCleanUnit1} from '../mocks/store';
import {UnitStore} from '../types/domain/interfaces';

process.env.MOCK_API = 'true';
const {MOCK_API, URL_API} = process.env;

export const UnitStoreAPI = {
  getOne: async (id: number): Promise<UnitStore> => {
    if (MOCK_API === 'true') {
      return kitCleanUnit1;
    } else {
      return await fetch(`${URL_API}/unit-store/${id}`).then(v => v.json());
    }
  },
};
