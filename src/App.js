import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginView" */),
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
          <Route path="*" component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
