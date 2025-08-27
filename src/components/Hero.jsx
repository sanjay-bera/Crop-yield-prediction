function Hero() {
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='100%25' height='100%25' rx='10' ry='10' fill='%23121816'/%3E%3Ctext x='50%25' y='52%25' text-anchor='middle' font-family='Arial' font-size='22' fill='%23a7b8b1'%3EPreview%3C/text%3E%3C/svg%3E";
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Boost community crop yield with data-driven insights</h1>
          <p>
            Plan, monitor, and optimize harvests with weather-aware forecasts, soil health
            tracking, and field analytics. Collaborate with your community to grow more with less.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#get-started">Start free</a>
            <a className="btn" href="#demo">View demo</a>
          </div>
        </div>
        <aside className="hero-card">
          <img
            src="https://images.unsplash.com/photo-1526362412876-9ce01d974389?q=80&w=1200&auto=format&fit=crop"
            alt="Field dashboard preview"
            width="600"
            height="400"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => { e.currentTarget.src = placeholder; }}
          />
        </aside>
      </div>
    </section>
  )
}

export default Hero


