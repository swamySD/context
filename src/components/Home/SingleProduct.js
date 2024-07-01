import React from 'react'
import './singleProduct.css'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../../context/Context'
const SingleProduct = ({product}) => {
  const {image,fastDelivery,name,rating,price}=product
  const {state:{cart},
  dispatch,}=CartState()
  console.log(cart)
  // console.log(image,fastDelivery,name,id)
  return (
    <div className='products'>
        <Card>
          <Card.Img variant='top' src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle style={{paddingBottom:10}}>
              <span>{price.split(",")[0]}</span>
              {fastDelivery ?(
                <div>Fast Delivery</div>
              ):(<div>4 days delivery</div>)}
              <Rating rating={rating}  />
            </Card.Subtitle>
            {cart.some(p=>p.id === product.id )?(
               <Button variant='danger' size="sm"  
               onClick={()=>{dispatch({type:'REMOVE_FROM_CART',payload:product})}}
               >Remove from Cart</Button>
            ):(
              <Button onClick={()=>{dispatch({
                type:'ADD_TO_CART',payload:product
              })}} size="sm">Add to Cart</Button>
            )}
           </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct