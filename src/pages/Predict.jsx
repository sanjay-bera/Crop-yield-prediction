import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Predict() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <h1 style={{margin:0, fontSize:32}}>Predict Yield</h1>
            <p className="lead">Enter field and weather details to estimate crop yield.</p>
            <div className="features" style={{gridTemplateColumns:'1fr'}}>
              <form className="feature" onSubmit={(e)=>e.preventDefault()}>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
                  <label>
                    Crop type
                    <select style={{width:'100%', height:40, borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'#0e1512', color:'inherit', padding:'0 10px'}}>
                      <option>Maize</option>
                      <option>Rice</option>
                      <option>Wheat</option>
                    </select>
                  </label>
                  <label>
                    Field size (ha)
                    <input type="number" step="0.1" placeholder="10" style={{width:'100%', height:40, borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'#0e1512', color:'inherit', padding:'0 10px'}} />
                  </label>
                  <label>
                    Soil moisture (%)
                    <input type="number" placeholder="35" style={{width:'100%', height:40, borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'#0e1512', color:'inherit', padding:'0 10px'}} />
                  </label>
                  <label>
                    Nitrogen level (ppm)
                    <input type="number" placeholder="20" style={{width:'100%', height:40, borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'#0e1512', color:'inherit', padding:'0 10px'}} />
                  </label>
                  <label>
                    7-day rainfall (mm)
                    <input type="number" placeholder="12" style={{width:'100%', height:40, borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'#0e1512', color:'inherit', padding:'0 10px'}} />
                  </label>
                  <label>
                    Avg. temp (°C)
                    <input type="number" placeholder="28" style={{width:'100%', height:40, borderRadius:8, border:'1px solid rgba(255,255,255,0.1)', background:'#0e1512', color:'inherit', padding:'0 10px'}} />
                  </label>
                </div>
                <div style={{display:'flex', gap:12, marginTop:16}}>
                  <button className="btn btn-primary" type="submit">Predict</button>
                  <button className="btn" type="reset">Reset</button>
                </div>
              </form>
              <div className="feature">
                <h3>Results</h3>
                <p className="lead">Your estimated yield will appear here.</p>
                <div className="stats" style={{gridTemplateColumns:'repeat(2,1fr)'}}>
                  <div className="stat"><div className="num">—</div><div className="label">Projected yield (t/ha)</div></div>
                  <div className="stat"><div className="num">—</div><div className="label">Confidence</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Predict


