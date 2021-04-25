import {useMutation, useQuery, useQueryClient} from 'react-query';
import {BasketStorage} from '../storage/BasketStorage';
import {BasketItem} from '../types/domain/interfaces';

export const useBaskets = (idUnitStore: number) => {
  return useQuery([`baskets`], () => BasketStorage.findAll(idUnitStore));
};

export const useCreateBasketItem = (
  idUnitStore: number,
  basketItem: BasketItem,
) => {
  const queryClient = useQueryClient();
  return useMutation(() => BasketStorage.insertOne(idUnitStore, basketItem), {
    onSuccess: () => queryClient.refetchQueries(`baskets`),
  });
};
