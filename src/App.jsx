import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import LogIn from "./Pages/LogIn";
// import Cart from "./Pages/Cart";
// import Success from "./Pages/Success";
     

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import { useSelector } from "react-redux";




function App() {

  // const user = useSelector()

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          {/* <Route path="/cart">
            <Cart />
          </Route> */}

          {/* <Route path="/success">
          <Success />
        </Route> */}
          
          <Route path="/login"> <LogIn /></Route>
          <Route path="/register"> <Register /> </Route>



        </Switch>
      </Router>
      
    );
}

export default App;


 


