
import './App.css';
import Profile from "./Profile";
import LoginBtn from "./LoginBtn";
import Header from "./Header";
import React from "react";
import Idpw from "./Idpw";
import Help from "./Help";
function App() {
  return (
      <div className='container'>
        <Header/>
          <div className='login-box'>
            <Profile/>
            <Idpw/>
            <LoginBtn/>
              <div class='help-position'>
            <Help/>
              </div>
      </div>
      </div>

  );
}

export default App;
