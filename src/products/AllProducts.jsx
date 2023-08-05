import axios from 'axios';
import Loader from "../components/Loader"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';

import StarRating from "../components/StarRating" // Adjust the path based on your folder structure



function AllProducts() {
    
    
    let [data, setData] = useState([]);

    const [loader , setLoader]= useState(true);
    const fetchData = async () => {
        const data = await axios.get('https://fakestoreapi.com/products')
        setData(data.data);
        setLoader(false)
        
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(data);
    return (
        <>

  <div className="loader d-flex size justify-content-center"> {loader?<Loader/>:null}</div>
    <br />
        <div className="d-flex  flex-wrap justify-content-center gap-3">
        {data.map((item)=>{
         return(

            <div class="product-card">
            <div class="badge">Top Selling</div>
            <div class="product-tumb">
                <img src={item?.image} alt="s"/>
            </div>
            <div class="product-details">
            <span class="product-catagory">{item?.category}</span>
                <h4><Link to={`/products/${item.id}`} >{item?.title.slice(0, 15)}</Link></h4>
                <p>{item?.description.slice(0, 70)}</p>
                <div class="product-bottom-details">
                <div class="product-price">$ {item?.price}</div>
                    <div class="product-links">
                    <Link to={`/products/${item?.id}`} ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 22">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg></Link>
                        <a href=""><i class="fa fa-heart"></i></a>
                        <a href=""><i class="fa fa-shopping-cart"></i></a>
                       
                    </div>
                </div>
                <div>
              <div className="d-flex size justify-content-center"><div  > {item?.rating.rate} </div>
              <StarRating  rating={item?.rating.rate} />( {item?.rating.count} Customer Reviews)</div>
            </div>
            </div>
        </div>
     
   
           
         )
     
        })}
        </div>

       
        </>
    )
}
export default AllProducts

