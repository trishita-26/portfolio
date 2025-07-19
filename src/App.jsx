import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Add BrowserRouter here
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
