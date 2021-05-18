import {Basket, BasketItem} from '../types/domain/interfaces';

interface basketListStorage {
  [idUnitStore: number]: Basket;
}

const basketList: basketListStorage = {};

export const BasketStorage = {
  findAll: async (idUnitStore: number): Promise<Basket> => {
    return basketList[idUnitStore];
  },
  findOneItem: async (
    idUnitStore: number,
    idOffer: number,
  ): Promise<BasketItem> => {
    return basketList[idUnitStore]?.basketItems.filter(
      i => i.portion.offer.id === idOffer,
    )[0];
  },
  insertOne: async (idUnitStore: number, basketItem: BasketItem) => {
    const i = idUnitStore;

    if (basketList[i] == undefined) {
      basketList[i] = {basketItems: []};
    }

    basketList[i].basketItems.push(basketItem);

    return basketItem;
  },
};
