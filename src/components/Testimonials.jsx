function Testimonials() {
  const ph = (t) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Crect width='100%25' height='100%25' rx='14' fill='%23121816'/%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' font-family='Arial' font-size='14' fill='%23a7b8b1'%3E${t}%3C/text%3E%3C/svg%3E`;
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2>Loved by local growers</h2>
        <div className="testimonials">
          <div className="testimonial">
            “We planned irrigation around alerts and saved two weeks of work.”
            <div className="who">
              <img src="https://i.pravatar.cc/40?img=5" width="28" height="28" style={{borderRadius: '50%'}} alt="Ada avatar" loading="lazy" referrerPolicy="no-referrer" onError={(e)=>{e.currentTarget.src=ph('A');}} />
              <span>Ada, maize farmer</span>
            </div>
          </div>
          <div className="testimonial">
            “Soil logs caught a nitrogen dip before it cost the season.”
            <div className="who">
              <img src="https://i.pravatar.cc/40?img=12" width="28" height="28" style={{borderRadius: '50%'}} alt="Ravi avatar" loading="lazy" referrerPolicy="no-referrer" onError={(e)=>{e.currentTarget.src=ph('R');}} />
              <span>Ravi, co-op lead</span>
            </div>
          </div>
          <div className="testimonial">
            “Forecasts matched our microclimate better than TV weather.”
            <div className="who">
              <img src="https://i.pravatar.cc/40?img=20" width="28" height="28" style={{borderRadius: '50%'}} alt="Lina avatar" loading="lazy" referrerPolicy="no-referrer" onError={(e)=>{e.currentTarget.src=ph('L');}} />
              <span>Lina, rice grower</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


