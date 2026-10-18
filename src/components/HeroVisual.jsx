import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function HeroVisual() {
  return (
    <div className="hero" aria-hidden="true">
      <img src={heroImg} className="base" width="170" height="179" alt="" />
      <img src={reactLogo} className="framework" alt="" />
      <img src={viteLogo} className="vite" alt="" />
    </div>
  )
}

export default HeroVisual
