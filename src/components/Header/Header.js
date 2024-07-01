import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
import {FaShoppingCart} from 'react-icons/fa'
import { CartState } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header=()=>{

const {state:{cart},dispatch,productDispatch}=CartState()

return(
 <Navbar bg="dark" variant="dark" style={{height:80}}>
    <Container>
        <Navbar.Brand>
            <Link className="anchor" to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
            <FormControl style={{width:500}} placeholder="Search a Product" type="search"
             onChange={(e) => {
                console.log(e.target.value)
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            className="m-auto">
        </FormControl>
        </Navbar.Text>
        <Nav>
            <Dropdown>
                <Dropdown.Toggle variant="success">
                <FaShoppingCart color="#white" fontSize="25px"/>
                    <Badge className="bg-success">{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth:370}} align="end">
                    {cart.length >0 ?(
                        <>
                        {cart.map((product)=>(
                           <span className="cartitem" key={product.id}>
                            <img src={product.image} className="cartItemImg" alt={product.name}/>
                          
                           <div className="cartItemDetail">
                              <span>{product.name}</span>
                              <span >{product.price.split(".")[0]}</span>
                           </div>
                           <AiFillDelete fontSize="20px"
                           style={{cursor:"pointer"}}
                           onClick={()=>dispatch({
                            type:"REMOVE_FROM_CART",payload:product})} />
                        </span>
                        ))}

                    <Link to="/cart">
                        <Button style={{width:"95%", margin:"0 10px"}}
                        
                        >Go to Cart</Button>
                        </Link>        

                        </>
                    ):(
                        <span style={{padding:10}}>Cart is Empty!</span>
                    )}
                   
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </Container>
 </Navbar>
)
}

export default Header