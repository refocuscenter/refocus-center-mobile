import React, {createContext, useEffect, useState} from 'react';
import {fetchData, Fetcher} from '../fetchers';
import {mockData} from '../mocks';
import {
  Basket,
  ServiceXorCombo,
  UnitStore,
  UserAccountStore,
} from '../types/domain/interfaces';

const defaultApplicationData = {
  unitStoreFetcher: new Fetcher<UnitStore>(),
  userAccountStoreFetcher: new Fetcher<UserAccountStore>(),
  servicesFetcher: new Fetcher<ServiceXorCombo[]>(),
  basketFetcher: new Fetcher<Basket>(),
};

export type ApplicationData = typeof defaultApplicationData;

export const ApplicationDataContext = createContext<ApplicationData>(
  {} as ApplicationData,
);

interface ApplicationDataProviderProps {
  isMockData: boolean;
  children: any;
}

export function ApplicationDataProvider({
  children,
  isMockData,
}: ApplicationDataProviderProps) {
  const [data, setData] = useState(defaultApplicationData);

  useEffect(() => {
    if (isMockData) {
      mockData(setData);
    } else {
      fetchData(setData);
    }
  }, []);

  return (
    <ApplicationDataContext.Provider value={data}>
      {children}
    </ApplicationDataContext.Provider>
  );
}
