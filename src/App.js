import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
     
     <h1>E-Comm Project</h1>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/register">
      <Register></Register>
    </Route>
    <Route path="/add">
      <AddProduct></AddProduct>
    </Route>
    <Route path="/update">
      <UpdateProduct></UpdateProduct>
    </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
