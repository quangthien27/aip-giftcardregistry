import React from 'react';
import {Link} from 'react-router-dom';

// Login page content
const PageLogin = () => (
  <div className="container">
    <h1 className="text-center mb-4">Login</h1>

    <div className="card mx-auto" style={{maxWidth: 500}}>
      <div className="card-body">
        <form>
          <div className="form-group">
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email address"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary mt-3">Submit</button>

          {/* Propose creating an account */}
          <p className="mt-3 mb-0">
            <small className="text-muted">Don't have an account? <Link to="/register">Register Now</Link></small>
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default PageLogin;
