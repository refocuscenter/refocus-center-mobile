import {Dispatch} from 'react';
import {ApplicationData} from '../contexts/ApplicationData';
import {kitCleanAllServicesAndCombos} from '../mocks/services';
import {kitCleanUnit1} from '../mocks/store';
import {user} from '../mocks/user';

export enum DataStatus {
  OK,
  Fetching,
  Error,
}

export class Fetcher<Data> {
  data?: Data;
  dataStatus: DataStatus = DataStatus.Fetching;
}

export async function fetchData(
  dataRef: {current: ApplicationData},
  setData: Dispatch<ApplicationData>,
) {
  setTimeout(() => {
    setData({
      ...dataRef.current,
      basketFetcher: {
        data: user.userAccountInStore[0].basket,
        dataStatus: DataStatus.OK,
      },
      servicesFetcher: {
        data: kitCleanAllServicesAndCombos,
        dataStatus: DataStatus.OK,
      },
    });
  }, 5000);

  setTimeout(() => {
    setData({
      ...dataRef.current,
      unitStoreFetcher: {
        data: kitCleanUnit1,
        dataStatus: DataStatus.OK,
      },
      userAccountStoreFetcher: {
        data: user.userAccountInStore[0],
        dataStatus: DataStatus.OK,
      },
    });
  }, 10000);
}
