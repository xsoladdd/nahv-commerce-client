import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import { QueryClientProvider, QueryClient } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";

interface AppProps {}

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route>
            <Layout />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};
export default App;
