import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartData=useSelector((state)=>{
    return state.cart});
  return <>
  {/* navbar bg */}
    <div className="">
      {/* width valla div */}
      <div className="flex h-20 max-w-6xl mx-auto items-center justify-between text-white">
      <Link to="/Home">
      <img src="../logo.png" className="h-14"></img>
      </Link>
        
        <div className="flex justify-between gap-10 items-center">
          <Link to="/Home">
              Home
          </Link>
          <Link to="/Cart">
          <div position="relative">
          <AiOutlineShoppingCart className="text-2xl" />
          {
            cartData.length>0 && 
            <span className="absolute top-5 right-44 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cartData.length}</span>
          }
          </div>
          
          </Link>
        </div>
      </div>
    </div>

  </>;
};

export default Navbar;
