
import { useParams } from 'react-router-dom'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function Pd() {
  const [counter , setCounter] = useState(1);
  const { id } = useParams();
  let [data, setData] = useState();
  const fetchData = async () => {
    const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setData(data.data);

  }

  const increament=()=>{
    if(counter< 10){
      setCounter(counter + 1);
    }

    

  }
  const decrement=()=>{
    if(counter > 1){
      setCounter(counter - 1);
    }
  }
  useEffect(() => {
    fetchData();
  },)
  console.log(data);


  return (
    <>
    <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top w-75 mb-5 mb-md-0" src={data?.image} alt="..."/></div>
                    <div className="col-md-6">
                        <div className="small product-catagory mb-1">{data?.category}</div>
                        <h3 className=" display-5 fw-bolder product-price">{data?.title.slice(0, 15)}</h3>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through"></span>
                            <span> $ {data?.price}</span>
                        </div>
                        <p className="lead text-secondary">{data?.description.slice(0, 70)}</p>
                        <div className="d-flex ">
                        <button className="btncart text-center me-3" id="inputQuantity"  onClick={decrement}  style={{"maxWidth":"3rem"}}>-</button>
                        <input className="btncart-counter text-center me-3" id="inputQuantity" type="num" value={counter} style={{"maxWidth":"3rem"}}/>
                        <button className="btncart text-center me-3" id="inputQuantity" onClick={increament}   style={{"maxWidth":"3rem"}}>+</button>
                            <button className="btncart flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pd
