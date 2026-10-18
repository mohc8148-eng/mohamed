import './Page2.css'

// Update these destinations here to change where each form sends users.
const AUTH_DESTINATIONS = {
  signin: '/signup',
  signup: 'https://www.google.com',
}

function Page2({ initialMode = 'signin' }) {
  const isSignup = initialMode === 'signup'

  function handleSubmit(event) {
    event.preventDefault()
    const destination = isSignup
      ? AUTH_DESTINATIONS.signup
      : AUTH_DESTINATIONS.signin

    window.location.assign(destination)
  }

  return (
    <section className="signin-page">
      <div className="signin-showcase">
        <div className="showcase-grain" aria-hidden="true" />
        <div className="brand-lockup" aria-label="N NAHJ Cafe MANAGEMENT SYSTEM">
          <span className="brand-mark">N</span>
          <span className="brand-copy">
            <strong>NAHJ Cafe</strong>
            <span>MANAGEMENT SYSTEM</span>
          </span>
        </div>
        <div className="showcase-message">
          <span className="eyebrow">A BETTER WAY TO RUN YOUR CAFE</span>
          <h1>Every detail,<br />beautifully in sync.</h1>
          <p>Your cafe, your team, your day — all working together.</p>
        </div>
        <div className="showcase-footer"><span className="footer-dot" /> Made for the people behind great coffee.</div>
        <div className="sun-orbit" aria-hidden="true"><span /></div>
      </div>

      <div className="signin-panel">
        <div className="signin-mobile-brand" aria-label="N NAHJ Cafe MANAGEMENT SYSTEM">
          <span className="brand-mark">N</span>
          <span className="brand-copy"><strong>NAHJ Cafe</strong><span>MANAGEMENT SYSTEM</span></span>
        </div>
        <div className="signin-card">
          <div className="welcome-label">{isSignup ? 'GET STARTED' : 'WELCOME BACK'}</div>
          <h2>{isSignup ? 'Create your account' : 'Sign in to your account'}</h2>
          <p className="signin-intro">{isSignup ? 'Enter your details to create your workspace account.' : 'Enter your details to access your workspace.'}</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="first-name">First name</label>
            <input id="first-name" name="firstName" type="text" placeholder="Your first name" autoComplete="given-name" required />

            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@yourcafe.com" autoComplete="username" required />

            <div className="password-label-row">
              <label htmlFor="password">Password</label>
              {!isSignup && <a href="#forgot-password" onClick={(event) => event.preventDefault()}>Forgot password?</a>}
            </div>
            <input id="password" name="password" type="password" placeholder="Enter your password" autoComplete="current-password" required />

            <label className="remember-option"><input type="checkbox" name="remember" /> <span>Keep me signed in</span></label>
            <button className="signin-button" type="submit">{isSignup ? 'Sign up' : 'Sign in'} <span aria-hidden="true">→</span></button>
          </form>
          <p className="auth-switch">
            {isSignup ? 'Already have an account?' : 'New to NAHJ Cafe?'}{' '}
            <a href={isSignup ? '/page2' : '/signup'}>{isSignup ? 'Sign in' : 'Sign up'}</a>
          </p>
          <p className="signin-help">Need help? <a href="mailto:support@nahjcafe.com">Contact your administrator</a></p>
        </div>
        <div className="panel-legal">© 2026 NAHJ Cafe <span>•</span> Management System</div>
      </div>
    </section>
  )
}

export default Page2
