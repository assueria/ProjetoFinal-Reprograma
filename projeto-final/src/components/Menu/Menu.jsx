import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './menu.css'

function Menu() {
  return(
    <nav className='div-menu'>
        <ul className="menu">
            <li className="logo">
                <Link className="link" to="/"><img src={logo} alt="Logo da papel mulher, um picel em amarelo e branco, que representa o material usado para colar os lambes."/> </Link>
            </li>
            <li className="item">
                <Link className="link" to="/">Início</Link>
            </li>
            <li className="item">
                <Link className="link" to="/sobre">Sobre nós</Link>
            </li>
            <li className="item">
                <a href='#' target='_blank'>Lojinha</a>
            </li>
            <li className="item">
                <Link className="link" to="/contribua">Contribua</Link>
            </li>
            <li className="item">
                <a href='https://www.instagram.com/papel.mulher/' target='_blank'>Participe</a>
            </li>
            <li className="item">
                <Link className="link" to="/ondeestivemos">Onde estivemos</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu