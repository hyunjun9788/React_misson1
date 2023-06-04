import logo from './logo.svg';
import './App.css';
import imgLogo from './google-logo.png'

function App() {
  return (
  <div className='container'>
    <img src={imgLogo} alt='logo'/>
    <p className='Content'>Google 계정으로 로그인</p>
  </div>

  );
}

export default App;
