import React, {useState, useEffect, Component } from "react";
import { NavLink } from 'react-router-dom';
import './SignUp.scss';


function SignUp(){

  useEffect(() => {
    document.body.classList.add("centered");
    return () => { document.body.classList.remove("centered"); }
  });

  return (
    <div className="centered">
      <section className="section section-signup">
        <div className="alert alert-light">Something goes wrong. Please, try again later.</div>
        <div className="signup-block">
          <div className="block-inner">
            <h1>Sign Up</h1>
            <form>
              <div className="form-group form-group-icon form-group-username">
                <input type="text" className="form-control form-control-lg" placeholder="Your username" id="username" />
              </div>
              <div className="form-group form-group-icon form-group-email">
                <input type="email" className="form-control form-control-lg" placeholder="Your email" id="email" />
              </div>
              <div className="form-group form-group-icon form-group-password">
                <input type="password" className="form-control form-control-lg" placeholder="Your password" id="password" />
              </div>
              
              <div className="terms">By creating an account, you agree and accept our <NavLink to="/terms">Terms</NavLink> and <NavLink to="/terms">Privacy Policy</NavLink>.</div>

              <div className="btn-w">
                <button className="btn btn-red btn-lg btn-block" type="submit">Log In</button>
              </div>

              <div className="registered">Already have an account? <NavLink to="/login">Log In</NavLink>.</div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp;