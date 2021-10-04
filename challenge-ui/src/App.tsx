import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './common/components';
import './app.css';
import { Container } from './common/components';

const App = () => {
  const ShoppingList = lazy(
    () => import(/* webpackChunkName: "ShoppingList" */ './features/shoppingList/ShoppingList')
  );

  return (
    <>
      <Router>
        <div className='app'>
          <Header title='Shopping List' />

          <Container>
            <Switch>
              <Suspense fallback={<h3>Loading...</h3>}>
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
