function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Bootstrap UI Design
      </h2>

      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h5 className="card-title text-center">
            Login Form
          </h5>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type='text'
                className="form-control"
                placeholder="Enter Name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
