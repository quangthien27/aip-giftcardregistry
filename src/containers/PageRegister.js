import React from 'react';

// Register page content
const PageRegister = () => (
  <React.Fragment>
    <h1 className="text-center mb-4">Register</h1>

    <div className="card mx-auto" style={{maxWidth: 500}}>
      <div className="card-body">
        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" placeholder="Email address"/>
          </div>
          <div className="form-group">
            <input type="tel" className="form-control" id="registerPhone" aria-describedby="emailHelp" placeholder="Phone number"/>
          </div>

          <div className="form-group">
            <input type="password" className="form-control" id="registerPassword1" placeholder="Password"/>
          </div>

          <div className="form-group">
            <input type="password" className="form-control" id="registerPassword2" placeholder="Confirm Password"/>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  </React.Fragment>
);

export default PageRegister;
