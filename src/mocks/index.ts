import {Dispatch} from 'react';
import {ApplicationData} from '../contexts/ApplicationData';
import {DataStatus} from '../fetchers';
import {kitCleanAllServicesAndCombos} from './services';
import {kitCleanUnit1} from './store';
import {user} from './user';

export function mockData(setData: Dispatch<ApplicationData>) {
  setData({
    basketFetcher: {
      data: user.userAccountInStore[0].basket,
      dataStatus: DataStatus.OK,
    },
    servicesFetcher: {
      data: kitCleanAllServicesAndCombos,
      dataStatus: DataStatus.OK,
    },
    unitStoreFetcher: {
      data: kitCleanUnit1,
      dataStatus: DataStatus.OK,
    },
    userAccountStoreFetcher: {
      data: user.userAccountInStore[0],
      dataStatus: DataStatus.OK,
    },
  });
}
