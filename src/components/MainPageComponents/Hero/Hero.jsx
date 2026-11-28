import './Hero.css'
import heroImg from '../../../assets/img/Hero/hero.webp'

export default function Hero() {
  return (
    <section className='hero'>
        <div className='hero-content'>

            <div className='hero-left'>
                <h1>Your dream home starts here</h1>
                <p>Discover furniture that brings comfort and style into every corner of your home</p>
                <button className='hero-button'>Shop now <span>&#8594;</span></button>
            </div>

            <div className="hero-right">
                <img src={heroImg} alt="Welcome to Furniq" />
            </div>

        </div>
    </section>
  )
}
