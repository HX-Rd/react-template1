import React from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import { Switch, Route } from 'react-router';
import NotFound from './components/NotFound/NotFound';

const App: React.FC = () => {

  const routes: JSX.Element = (
    <Switch>
      <Route path='/' component={NotFound}/>
    </Switch>
  )

  return (
    <div className={classes.App}>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;
