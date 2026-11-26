import './CategoryCard.css'

export default function CategoryCard(props) {
  return (
    <>
        <div className="categoryCard">
            <img src={props.imgUrl} alt={props.name} />
            <p className="categoryName">{props.name}</p>
        </div>
    </>
  )
}
