

import React, {useState, useEffect } from 'react'
import { CartState } from '../../context/Context'
import { Button, Col, Image, ListGroup, Row,Form } from 'react-bootstrap'
import Rating from '../Home/Rating.js'
import { AiFillDelete } from 'react-icons/ai'


const Cart = () => {
  const [total,setTotal]=useState()
  const {state:{cart},dispatch,}=CartState()

useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
},[cart])

  return (
    <div className='home' >
      <div className='productcontainer'>
        <ListGroup>
          {cart.map((product)=>(
            <ListGroup.Item key={product.id}>
              <Row>
                <Col md={2}>
                  <Image src={product.image} alt={product.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{product.name}</span>
                </Col>
                <Col md={2}> {product.price}</Col>
                <Col m={2}>
                  <Rating rating={product.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control as="select" 
                  onChange={(e)=>dispatch({
                    type:'CHANGE_CART_QTY',
                    payload:{
                      id:product.id,
                      qty:e.target.value
                    },
                  })}
                  value={product.qty}>
                    {[...Array(product.inStock).keys()].map((x)=>(
                      <option key={x+1}>{x+1}</option>
                    ))}
                  </Form.Control>
                </Col>

              <Col md={2}>
                <Button type="button" variant='light'
                onClick={()=>dispatch({
                  type:"REMOVE_FROM_CART",
                  payload:product
                })}>
                  <AiFillDelete fontSize="20px" />
                </Button>
              </Col>
            </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    <div className='filters summary'>
        <span className='title'>Subtotal ({cart.length}) items</span>
        <span style={{fontWeight:700,fontSize:20}}>Total: {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to checkout
        </Button>
    </div>
  </div>
  )
}

export default Cart