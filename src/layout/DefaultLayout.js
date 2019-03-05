import './index.scss';
import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ROUTES } from './../routes';
import DefaultFooter from './components/DefaultFooter';
import DefaultContent from './components/DefaultContent';
import DefaultHeader from './components/DefaultHeader';
import NotFoundPage from '../pages/NotFoundPage';

class DefaultLayout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className="layout">
          <Switch>
            {ROUTES.map((route) => (
              <Route
                exact
                path={route.path}
                key={`route-${route.path}`}
                render={(props) => (
                  <React.Fragment>
                    {!route.disableHeader && <DefaultHeader />}
                    <Layout>
                      <DefaultContent
                        content={route.component}
                        contentName={route.name}
                        {...props}
                      />
                    </Layout>
                    {!route.disableFooter && <DefaultFooter />}
                  </React.Fragment>
                )}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
