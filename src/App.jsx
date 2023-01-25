import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import StoreProvider from "./Store/StoreContext"

function App() {
  return (
    <BrowserRouter>
    <StoreProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </StoreProvider>
    </BrowserRouter>
  )
}

export default App
