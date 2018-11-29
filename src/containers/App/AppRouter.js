import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path='/dashboard'
          component={asyncComponent(() => import('../Widgets'))}
        />
        <Route
          exact
          path='/mail'
          component={asyncComponent(() => import('../Mail'))}
        />
        <Redirect from="/" to={`dashboard`} />
      </Switch>
    );
  }
}

export default AppRouter;
