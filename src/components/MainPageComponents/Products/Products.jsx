import './Products.css'
import products from '../../../data/products.js'
import ProductCard from '../../ProductCard/ProductCard.jsx'

export default function Products() {
  return (
    <div className='products-component'>

      <h2>Featured Products</h2>

      <div className="products-grid">

        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  )
}
