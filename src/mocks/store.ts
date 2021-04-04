import {Store, UnitStore} from '../types/domain/interfaces';
/*
 *In vscode pres ALT+Z to best visualization
 */

export const kitCleanStore: Store = {
  id: 1,
  image: 'data:image/png;base64,',
  name: 'Hortfruit',
};

export const kitCleanUnit1: UnitStore = {
  id: 1,
  store: kitCleanStore,
};