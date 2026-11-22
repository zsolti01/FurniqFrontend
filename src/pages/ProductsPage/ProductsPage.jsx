import ProductCard from "../../components/ProductCard/ProductCard.jsx"
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import products from '../../data/products.js'
import './ProductsPage.css'

export default function ProductsPage() {
  return (
    <div className='products-page'>

        <Sidebar />

        <h1>Our products</h1>

        <div className='products-grid'>

            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}

        </div>

    </div>
  )
}
