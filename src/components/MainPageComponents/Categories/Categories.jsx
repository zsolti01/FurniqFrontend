import './Categories.css'
import categories from '../../../data/categories.js'
import CategoryCard from '../CategoryCard/CategoryCard'

export default function Categories() {
  return (
    <div className='categories-component'>
      <h2>Our top Categories</h2>
      
      <div className='categories-grid'>
        {categories.map((category) => {
          return <CategoryCard name={category.name} imgUrl={category.imgUrl} />
        })}
      </div>
    </div>
  )
}
