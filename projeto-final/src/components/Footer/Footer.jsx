import './footer.css'
import { BsInstagram, BsMedium, BsYoutube, BsTwitter} from 'react-icons/bs'


function Footer() {
    return(
        <div className="footer">
            <BsInstagram color=''/>
            <BsYoutube />
            <BsTwitter />
            <BsMedium />
            <h5>Todos os direitos reservados</h5>
            <h5>Política de privacidade</h5>
            <h5>Desenvolvido por Emanuelly Assuéria</h5>
        </div>
    )
}

export default Footer