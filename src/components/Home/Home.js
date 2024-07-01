import { CartState } from "../../context/Context"
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import './Home.css'
const Home=()=>{
    const {state:{products},
productState:{sort,byStock,byFastDelivery,byRating,searchQuery},
}=CartState()
//    console.log(products)

const transformProducts=()=>{
    let sortedProducts=products;
    if(sort){
        sortedProducts=sortedProducts.sort((a,b)=>(
            sort === 'lowToHigh'?a.price-b.price:b.price-a.price
        ))
    }

    if(!byStock){
        sortedProducts=sortedProducts.filter((product)=>product.inStock)
    }
    if(byFastDelivery){
        sortedProducts=sortedProducts.filter((product)=>product.fastDelivery)
    }

    if(byRating){
        sortedProducts=sortedProducts.filter((products)=>products.ratings>=byRating)
    }

    if(searchQuery){
        sortedProducts=sortedProducts.filter((product)=>
        product.name.toLowerCase().includes(searchQuery)
        )
    }

    return sortedProducts
}

    return(
     <div className="home">
        <Filter/>
        <div className="productcontainer">
            {transformProducts().map((product)=>
            (<SingleProduct key={product.id} product={product} />))}
        </div>
     </div>
    )
}
export default Home