import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './menu.css'

function Menu() {

    window.addEventListener('scroll', function(){
        const menu = document.querySelector('.menu');
        menu.classList.toggle('sticky', window.scrollY > 200);
      })

  return(
    <div className='menu'>
        <nav className='navbar'>
                <div className='logo'> 
                        <Link className="link" to="/"><img src={logo} alt="Logo da papel mulher, um picel em amarelo e branco, que representa o material usado para colar os lambes."/> </Link>
                </div>
                <ul className='nav-items'>
                    <li>
                        <a><Link className="link" to="/">Início</Link></a>
                    </li>
                    <li>
                        <a><Link className="link" to="/sobre">Sobre nós</Link></a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Lojinha</a>
                    </li>
                    <li>
                        <a>
                        <Link className="link" to="/contribua">Contribua</Link>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/papel.mulher/' target='_blank'>Participe</a>
                    </li>
                    <li>
                        <a><Link className="link" to="/ondeestivemos">Nosso rastro</Link></a>
                    </li>
                </ul>
        </nav>
    </div>
  )
}

export default Menu