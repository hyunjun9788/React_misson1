
import './App.css';
import imgLogo from './google-logo.png'
import profile from './profile.png'
function App() {
  return (
      <div className='container'>
  <div className='header'>
    <img className='logo' src={imgLogo} alt='logo'/>
    <p className='Content'>Google 계정으로 로그인</p>
  </div>
    <div className='login-box'>
      <img className='profile' src={profile}/>
      <div className='idPw'>
        <input id='email' type='text' placeholder='이메일'/>
        <input id='pw' type='password' placeholder='비밀번호'/>
      </div>
    </div>
      </div>

  );
}

export default App;
