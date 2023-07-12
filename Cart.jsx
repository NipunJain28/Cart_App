import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/Slices/cartSlice";
import {AiFillDelete} from "react-icons/ai"
const Cart = () => {
  const cartData=useSelector((state)=>{
    return state.cart});
    console.log(cartData);
    const dispatch=useDispatch();
    let totalMoney=0;
    for(let i=0;i<cartData.length;i++){
      totalMoney+=(cartData[i].price);
    }
  return <div className="flex mt-4  justify-center gap-4 items-start max-w-6xl mx-auto ">
  <div >
  {
    cartData.length>0 && cartData.map((data,index)=>{
      return (
        <div key={index} className="flex  w-[50%] items-center ">
        
          <div>
            <img src={data?.image}></img>
          </div>
        
        <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-bold text-lg text-black">{data?.title}</div>
            <div className=" text-gray-400 font-normaal ">
              {
                data.description.split(" ").slice(0,13).join(" ")+"..."
              }
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="text-green-600 font-semibold">{"$"+data.price}</div>
              <div>
                  <AiFillDelete onClick={()=>dispatch(deleteFromCart(data.id))}></AiFillDelete>
              </div>
            </div>
            </div>
           
            
          </div>
          
      )
          
      
      
    } ) 
  }
  
  {
    cartData.length===0 && 
    <div className="flex justify-center items-center text-lg">
      Your Cart is Empty
    </div>
  }
  </div>
  {
    cartData.length >0 && <div className="flex flex-col items-start">
      <div className="text-green-600 text-lg font-bold">Your Cart</div>
      <div className="text-green-600 text-[50px] font-bold">Summary</div>
      <div>Total Items:{cartData.length}</div>
      <div className="w-full">
        <div>Total Amount:<span className="text-black font-bold">${totalMoney.toFixed(2)}</span></div>
        <button className="w-full flex justify-center items-center bg-green-600 h-auto text-white font-bold b-2 rounded-md">CheckOut Now</button>
      </div>
    </div>
  }
 
  

  </div>
};

export default Cart;
