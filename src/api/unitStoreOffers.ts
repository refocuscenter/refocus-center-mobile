import {kitCleanAllServicesAndCombos} from '../mocks/services';
import {OfferXorCombo} from '../types/domain/interfaces';

process.env.MOCK_API = 'true';
const {MOCK_API, URL_API} = process.env;

export const UnitStoreOffersAPI = {
  getAll: async (id: number): Promise<OfferXorCombo[]> => {
    if (MOCK_API === 'true') {
      return kitCleanAllServicesAndCombos;
    } else {
      return await fetch(`${URL_API}/unit-store/${id}/offer`).then(v =>
        v.json(),
      );
    }
  },
};
