import imgLogo from "../../google-logo.png"
import './Header.css'

function Header(){
    return (
        <div>
    <img className='logo' src={imgLogo} alt='logo'/>
    <p className='Content'>Google 계정으로 로그인</p>
        </div> )
}

export default Header