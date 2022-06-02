import React from 'react';

function login() {
   

    return (
      <div className="login">
          <div className="login-intro text-title">Login</div>
          <div className="login-name">
              <div className="login-name-first text-label">Nome de utilizador</div>    
            <input className="login-name-field" type="text" placeholder="ex:Alex" />        
          </div>
          <div className="login-pass">
              <div className="login-pass-first text-label">Password</div>
              <input className="login-pass-field" type="text" placeholder="************" />        
          </div>
        
       
          <a  href="/" className="button text-label">Login</a>
       
      </div>
    );
  }
  
  export default login;
  
