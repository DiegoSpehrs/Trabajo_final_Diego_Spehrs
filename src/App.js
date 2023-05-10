import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailConteiner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";





const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
