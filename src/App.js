
import './App.css';
import Profile from "./components/Profile/Profile";
import LoginBtn from "./components/Main/LoginBtn";
import Header from "./components/Header/Header";
import React from "react";
import Idpw from "./components/Main/Idpw";
import Help from "./components/Help/Help";
function App() {
  return (
      <div className='container'>
        <Header/>
          <div className='login-box'>
            <Profile/>
            <Idpw/>
            <LoginBtn/>
              <div className='help-position'>
            <Help/>
              </div>
      </div>
      </div>

  );
}

export default App;
