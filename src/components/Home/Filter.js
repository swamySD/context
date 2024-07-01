import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import './Filter.css'
import { CartState } from '../../context/Context'
const Filter = () => {

  
    const   {productState:{byStock,byFastDelivery,sort,byRating,searchQuery},productDispatch}=   CartState()

console.log(byStock,byFastDelivery,sort,byRating)

  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check inline label="Ascending"
            onChange={()=>productDispatch({
                type:"SORT_BY_PRICE",
                payload:'lowToHigh'
            })}
            name="group1" type='radio' id={'inline-1'}
            checked={sort === "lowToHigh" ? true : false}
            />
        </span>
        <span>
            <Form.Check inline label="Descending"

            onClick={()=>productDispatch({
                type:"SORT_BY_PRICE",
                payload:'highToLow'
            })}
            name="group1" type='radio' id={'inline-2'}
            checked={sort === "highToLow" ? true : false}/>
        </span>

        <span>
            <Form.Check inline label="Include Out of stock"

            onChange={()=>productDispatch({
                type:'FILTER_BY_STOCK'
            })} checked={byStock}
            name="group1" type='checkbox' id={'inline-3'}/>
        </span>

        <span>
            <Form.Check inline label="Fast Delivery Only"
            name="group1" type='checkbox' id={'inline-4'}
            onChange={() =>
                productDispatch({
                  type: "FILTER_BY_DELIVERY",
                })
              }
              checked={byFastDelivery}
            />
        </span>
        <span>
            <label style={{paddingRight:10}} >Rating: </label>
            <Rating rating={byRating} onClick={(i)=>productDispatch({
                type:'FILTER_BY_RATING',
                payload:i+1
            })}
            
            style={{cursor:'pointer'}} />
        </span>
        <Button variant='light'
        onClick={() =>productDispatch({ type: "CLEAR_FILTERS"})}
        >Clear Filters</Button>

    </div>
  )
}

export default Filter