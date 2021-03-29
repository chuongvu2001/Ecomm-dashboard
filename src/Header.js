import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    let history = useHistory();
    const Logout = ()=>{
        localStorage.clear();
        history.push('/login');
    }
    //  console.warn(user);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                              <Link to="/">Product List</Link>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }
                </Nav>
                {localStorage.getItem('user-info') ?
                
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null
                }
            </Navbar>
        </div>
    )
}
export default Header