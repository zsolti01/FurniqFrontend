import './Sidebar.css'

export default function Sidebar() {

  const categories = [
    'Living Room',
    'Bedroom',
    'Kitchen & Dining',
    'Home Office',
    'Bathroom',
    'Hallway',
    'Outdoor & Garden'
  ];

  return (
    <div className="sidebar">
        <p className='sidebar-header'>Our categories</p>
        <div className='categories'>
          {categories.map((category) => (
            <p key={category}>{category}</p>
          ))}
        </div>
    </div>
  )
}
