import './ProductCard.css'

export default function ProductCard({product}) {
  return (
    <div className="product-card">

        <img src={product.img} alt={product.name} />

        <div className='product-info'>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <h4>{product.price.toLocaleString('hu-HU')} Ft</h4>

            <button>Details</button>
        </div>

    </div>
  )
}
