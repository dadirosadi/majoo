import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configurePersistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes } from "./routes/routes";
import Header from "./components/header/header.component";

function App({ store }: any) {
  const persistor = configurePersistor(store);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Header />
          <Switch>
            {
              Routes.map((route: any) => {
                return <Route key={route.path} exact path={route.path} render={() => route.component} />
              })
            }
          </Switch>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
