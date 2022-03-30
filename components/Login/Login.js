import React, {useState, useEffect, Component } from "react";
import { NavLink } from 'react-router-dom';
import facade from "../../services/apiFacade";
import './Login.scss';


function LogIn(props){

  useEffect(() => {
    document.body.classList.add("centered");
    return () => { document.body.classList.remove("centered"); }
  });

  const [state, setState] = useState();

  const login =(event) =>{
    event.preventDefault();
    props.login(state.username, state.password);
  }
  const onChange = (event) =>{
    setState({...state, [event.target.id]: event.target.value})
  }

  return (
    <div className="centered">
      <section className="section section-login">
        <div className="alert alert-light">Something goes wrong. Please, try again later.</div>
        <div className="login-block">
          <div className="block-inner">
            <h1>Login</h1>
            <form onSubmit={login} onChange={onChange} >
              <div className="form-group form-group-icon form-group-username">
                <input type="text" className="form-control form-control-lg" placeholder="Your username" id="username" />
              </div>
              <div className="form-group">
                <div className="form-group-icon form-group-password">
                  <input type="password" className="form-control form-control-lg" placeholder="Your password" id="password" />
                </div>
                <div className="forgot"><NavLink to="/forgot">Forgot password?</NavLink></div>
              </div>

              

              <div className="btn-w">
                <button className="btn btn-red btn-lg btn-block" type="submit">Log In</button>
              </div>

              <div className="not-registered">Not registered? <NavLink to="/signup">Create an account</NavLink>.</div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function LoggedIn(){
  return (
    <div>
      <h2>Data Received from server</h2>
    </div>
  )
}


class App extends Component {
 constructor(props) {
   super(props);
   this.state = { loggedIn: false }
 }

 logout = () => {
  facade.logout();
  this.setState({ loggedIn: false });
 } 

 login = (user, pass) => {
  facade.login(user,pass)
  .then(res =>this.setState({ loggedIn: true }));
 } 
 
 render() {
   return (
     <>
       {!this.state.loggedIn ? (<LogIn login={this.login} />) :
         ( <div>
             <LoggedIn/>
             <button onClick={this.logout}>Logout</button>
           </div>)}
     </>
   )
 }
}
export default App;