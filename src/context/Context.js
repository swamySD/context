import React, {  useContext, useReducer } from 'react'
import { createContext } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer,productReducer } from './Reducer';


const Cart=createContext()

faker.seed(99)


const Context = ({children}) => {
   
  const products=[...Array(50)].map(()=>({
    id:faker.string.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.url(400, 400, 'fashion', true),
    inStock:faker.number.int({min:0,max:7}),
    fastDelivery:faker.datatype.boolean(),
    rating:faker.number.int({min:1,max:5}),
    inStock:faker.number.int({min:1,max:8})
    }))
  
  const [state,dispatch]=useReducer(cartReducer,{
    products:products,
    cart:[]
  })

  const [productState,productDispatch]=useReducer(productReducer,{
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:"",
  })
  console.log(productState)

  return (
  <Cart.Provider value={{state,dispatch,productState,productDispatch}}>
        {children}
  </Cart.Provider>
  )
}

export default Context;

export const CartState=()=>{
  return useContext(Cart)
}