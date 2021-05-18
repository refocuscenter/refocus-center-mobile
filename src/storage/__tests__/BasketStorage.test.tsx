import 'react-native';
import {Basket} from '../../types/domain/interfaces';

interface basketListStorage {
  [idUnitStore: number]: Basket;
}

it('test storage', () => {
  const basketList: basketListStorage = {};

  if (!basketList[5]) {
    basketList[5] = {basketItems: []};
  }

  console.log(basketList);
});
