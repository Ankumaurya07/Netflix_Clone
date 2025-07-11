import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },  
    {
      path:"/browse",
      element:<Browse/>
    }
  ])

  return (
    <div className=''>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body