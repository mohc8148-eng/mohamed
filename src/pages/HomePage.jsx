import StarterSection from '../components/StarterSection.jsx'
import NextStepsSection from '../components/NextStepsSection.jsx'

function HomePage() {
  return (
    <>
      <StarterSection />
      <div className="ticks" aria-hidden="true" />
      <NextStepsSection />
      <div className="ticks" aria-hidden="true" />
      <section id="spacer" aria-hidden="true" />
    </>
  )
}

export default HomePage
