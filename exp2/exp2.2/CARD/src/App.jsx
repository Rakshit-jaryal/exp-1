import './App.css'

function App() {
  const data = [
    { title: 'Card One', desc: 'This is the first card' },
    { title: 'Card Two', desc: 'This is the second card' },
    { title: 'Card Three', desc: 'This is the third card' }
  ]

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Card-Based Layout Using Bootstrap
      </h2>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
                <button className="btn btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
