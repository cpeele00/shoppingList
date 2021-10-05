import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Spinner } from './common/components';
import './app.css';
import { Container } from './common/components';

const App = () => {
  const ShoppingList = lazy(
    () =>
      import(
        /* webpackChunkName: "ShoppingList" */ './features/shoppingList/ShoppingList.container'
      )
  );

  return (
    <>
      <Router>
        <div className='app'>
          <Header title='Shopping List' />

          <Container>
            <Switch>
              <Suspense fallback={<Spinner />}>
                <Route exact path='/' component={ShoppingList} />
                <Route exact path='/list' component={ShoppingList} />
              </Suspense>
            </Switch>
          </Container>
        </div>
      </Router>
    </>
  );
};

export default App;
