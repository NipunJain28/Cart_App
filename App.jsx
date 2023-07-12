import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { Navigate, Outlet, Route,Routes } from "react-router";
import Cart from "./pages/Cart";
const App = () => {
  return <>
        <div className="bg-slate-900">
          <Navbar/>
        </div>

        {/* home page and cart in a route */}
        

        
        <Routes>
        <Route path="*" element={<Navigate to="/Home"></Navigate>}></Route>
        <Route path="/Home" index element={<Home></Home>}>

</Route>
<Route path="/Cart" element={<Cart/>}></Route>
       
          
        </Routes> 
  </>;               
};

export default App;
