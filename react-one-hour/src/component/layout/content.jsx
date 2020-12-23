import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './../../config/page-route.jsx';

class Content extends React.Component {
  render() {
    // page-router에서 routes란 배열 만들었음
    // map(배열 내 객체, 배열 순서)
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    );
  }
}
export default Content;
