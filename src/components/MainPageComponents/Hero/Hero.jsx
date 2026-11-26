import './Hero.css'
import heroImg from '../../assets/img/Hero/hero.webp'

export default function Hero() {
  return (
    <div className='hero'>
        <header>
            <div className='hero-left'>
                <h1>Your dream home starts here</h1>
                <p>Discover furniture that brings comfort and style into every corner of your home</p>
                <button>Shop now &#8594;</button>
            </div>
            <div className="hero-right">
                <img src={heroImg} alt="Header Image" />
            </div>
        </header>
    </div>
  )
}
