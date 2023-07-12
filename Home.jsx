import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product"
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [data,setData]=useState([]);
  const cartData=useSelector((state)=>{
    return state.cart});
    console.log("this is cart "+cartData);
  async function fetchData(){
    try{
      const response=await fetch(API_URL);
    const op=await response.json();
    setData(op);
    }
    catch(e){

    }
    
  }
  useEffect(()=>{fetchData()},[]);
  return <div >
          <div className="grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h[80vh]">
            {
              data.map((data,index)=>{
                return <Product data={data} key={index}></Product>
              })
            }
          </div>
  </div>;
};

export default Home;
