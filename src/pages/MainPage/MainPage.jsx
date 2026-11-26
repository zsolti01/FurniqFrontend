import Navbar from "../../components/Navbar/Navbar";
//import Hero from "../../components/MainPageComponents/Hero/Hero";
import Categories from "../../components/MainPageComponents/Categories/Categories";
import Products from "../../components/MainPageComponents/Products/Products";

export default function MainPage() {
  return (
    <div className="mainPage">
        <Navbar />

        <div className="hero"></div>

        <div className="categories">
          <Categories />
        </div>

        <div className="products">
          <Products />
        </div>
    </div>
  )
}
