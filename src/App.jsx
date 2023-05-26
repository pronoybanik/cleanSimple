import { RouterProvider } from "react-router-dom"
import allRouter from "./Routes/AllRoute"


function App() {

  return (
   <div>
      <RouterProvider router={allRouter}></RouterProvider>

   </div>
  )
}

export default App
