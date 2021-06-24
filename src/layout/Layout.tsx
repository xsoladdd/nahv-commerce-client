import React, { Suspense, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header/";
import routes from "../routes";
import Loading from "src/components/Loading";
import Cookies from "js-cookie";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const [accessToken, setAccessToken] = useState(Cookies.get("access_token"));
  React.useEffect(() => {
    console.log("triggered  ");
    return () => {};
  }, [Cookies.get("access_token")]);
  const handleLogout = () => {
    Cookies.remove("access_token");
    setAccessToken("");
  };
  return (
    <div className="layout-container">
      <div className="body-container">
        {/* <Loading /> */}
        <Suspense fallback={<Loading />}>
          <Header accessToken={accessToken} logout={handleLogout} />
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
