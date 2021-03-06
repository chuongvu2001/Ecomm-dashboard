import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected'
import ProductList from './ProductList'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Header></Header> */}

          {/* <h1>E-Comm Project</h1> */}
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/add">
            <Protected Cmp={AddProduct}></Protected>
            {/* <AddProduct></AddProduct> */}
          </Route>
          <Route path="/update">
            <Protected Cmp={UpdateProduct}></Protected>
            {/* <UpdateProduct></UpdateProduct> */}
          </Route>
          <Route path="/">
            <Protected Cmp={ProductList}></Protected>
            {/* <AddProduct></AddProduct> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
