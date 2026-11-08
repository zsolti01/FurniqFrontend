import ProductCard from '../../components/ProductCard'
import products from '../../data/products.js'

export default function ProductsPage() {
  return (
    <div className='products-page'>

        <h1>Our products</h1>

        <div className='products-grid'>

            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}

        </div>

    </div>
  )
}
