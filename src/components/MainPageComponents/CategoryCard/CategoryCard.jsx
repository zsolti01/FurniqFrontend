import './CategoryCard.css'

export default function CategoryCard(props) {
  return (
    <div className="category-card">

      <img src={props.imgUrl} alt={props.name} />
      <div className="category-info">
        <h3>{props.name}</h3>
      </div>

    </div>
  )
}
