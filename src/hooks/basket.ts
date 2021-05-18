import {useMutation, useQuery, useQueryClient} from 'react-query';
import {BasketStorage} from '../storage/BasketStorage';
import {BasketItem} from '../types/domain/interfaces';

export const useBaskets = (idUnitStore: number) => {
  return useQuery([`baskets-${idUnitStore}`], () =>
    BasketStorage.findAll(idUnitStore),
  );
};

export const useBasketItem = (idUnitStore: number, idOffer: number) => {
  return useQuery([`basket-item`, idUnitStore, idOffer], () =>
    BasketStorage.findOneItem(idUnitStore, idOffer),
  );
};

export const useCreateBasketItem = (idUnitStore: number) => {
  const queryClient = useQueryClient();
  return useMutation(
    (basketItem: BasketItem) =>
      BasketStorage.insertOne(idUnitStore, basketItem),
    {
      onSuccess: () => queryClient.refetchQueries([`baskets-${idUnitStore}`]),
    },
  );
};
