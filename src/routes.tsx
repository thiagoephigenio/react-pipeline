import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import Fechamento from "./pages/Fechamento/Fechamento";
import Home from "./pages/Home/Home";
import Fechamento from "./pages/Fechamento/Fechamento";
import Login from "./pages/Login/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}></Route>
        
        <Route path="/fechamento" component={Fechamento}></Route>
        
        <Route path="/login" component={Login}></Route>

        <Route path="*" component={() => <h1>Page not found</h1>} />


      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
