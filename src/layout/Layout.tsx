import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header/";
import routes from "../routes";
import Loading from "src/components/Loading";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="body-container">
        {/* <Loading /> */}
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props: typeof Route) => (
                      <route.component router={props} />
                    )}
                  />
                )
              );
            })}
            <Redirect from="*" to="/404" />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};
export default Layout;
