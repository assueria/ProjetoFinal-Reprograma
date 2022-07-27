import './footer.css'
import { Link } from 'react-router-dom'
import { BsInstagram, BsMedium, BsYoutube, BsTwitter} from 'react-icons/bs'
import logoFrase from '../../assets/logoFrase.png'


function Footer() {
    return(
        <footer className='footer'>
            <div className='div-conteudo'>
                <div className='div-logo'>
                   <Link className="link" to="/"><img src={logoFrase} alt="Logo da papel mulher, um picel em amarelo e branco, que representa o material usado para colar os lambes."/> </Link>
                </div>
                <div className='social-list'>
                    <ul>
                        <p>FALE CONOSCO</p>
                        <div className='itens'>
                        <li>
                            <BsInstagram size='2rem'/>
                        </li>
                        <li>
                            <BsYoutube size='2rem'/>
                        </li>
                        <li>
                            <BsTwitter size='2rem'/>
                        </li>
                        <li>
                            <BsMedium size='2rem'/>
                        </li>
                        </div>
                    </ul>
                </div>
                <div className='espacoContribua'> 
                    <p className='contribua'>Faça uma doação e apoie a iniciativa!</p>
                    <button className='btn'>
                        Contribua!
                    </button>
                </div>
            </div>

            <div className='copy'>
                <h5>Todos os direitos reservados</h5>
                <h5>Política de privacidade</h5>
                <h5>Desenvolvido por Emanuelly Assuéria</h5>
            </div>
        </footer>
    )
}

export default Footer