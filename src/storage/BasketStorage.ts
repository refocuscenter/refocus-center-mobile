import {user} from '../mocks/user';
import {Basket, BasketItem} from '../types/domain/interfaces';

process.env.MOCK_API = 'false';
const {MOCK_API} = process.env;

interface basketListStorage {
  [idUnitStore: number]: Basket;
}

const basketList: basketListStorage = {};

export const BasketStorage = {
  findAll: async (idUnitStore: number): Promise<Basket> => {
    if (MOCK_API === 'true') {
      return user.userAccountInStore[0].basket;
    } else {
      return basketList[idUnitStore];
    }
  },
  insertOne: async (idUnitStore: number, basketItem: BasketItem) => {
    basketList[idUnitStore].basketItems.push(basketItem);
    return basketItem;
  },
};
