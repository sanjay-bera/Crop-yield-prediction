import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="logo" to="/">
          <span className="logo-badge">CY</span>
          Crop Yield
        </Link>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#stats">Impact</a>
          <a href="#testimonials">Stories</a>
          <Link to="/predict">Predict</Link>
        </nav>
        <div className="nav-cta">
          <a className="btn" href="#login">Log in</a>
          <Link className="btn btn-primary" to="/predict">Predict</Link>
        </div>
      </div>
    </header>
  )
}

export default Header


