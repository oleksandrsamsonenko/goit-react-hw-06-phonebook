import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Phonebook } from './Phonebook/Phonebook';

import css from './App.module.css';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={css.parent}>
          <Phonebook />
        </div>
      </PersistGate>
    </Provider>
  );
};
