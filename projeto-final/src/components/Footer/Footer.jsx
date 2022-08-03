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
                        <li >
                            <a href="https://www.instagram.com/papel.mulher/" target='_blank'>
                                <BsInstagram size='2rem' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/channel/UC6DvLhQGY4CS1oQ7fzTNPFQ' target='_blank'>
                            <BsYoutube size='2rem'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/papelmulher' target='_blank'>
                            <BsTwitter size='2rem'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://papel-mulher.medium.com/' target='_blank'>
                            <BsMedium size='2rem'/>
                            </a>
                        </li>
                        </div>
                    </ul>
                </div>
                <div className='espacoContribua'> 
                    <p className='contribua'>Faça uma doação e apoie a iniciativa!</p>
                    <button className='btn'>
                        <a>
                            <Link className="link" to="/contribua">Contribua</Link>
                        </a>
                    </button>
                </div>
            </div>

            <div className='copy'>
                <h5>Todos os direitos reservados</h5>
                <h5>Política de privacidade</h5>
                <h5>Desenvolvido por Assuéria</h5>
            </div>
        </footer>
    )
}

export default Footer