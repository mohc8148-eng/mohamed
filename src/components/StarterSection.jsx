import { useState } from 'react'
import HeroVisual from './HeroVisual.jsx'

function StarterSection() {
  const [count, setCount] = useState(0)

  return (
    <section id="center">
      <HeroVisual />
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Count is {count}
      </button>
    </section>
  )
}

export default StarterSection
