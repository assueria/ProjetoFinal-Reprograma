import './header.css'
import image from '../../assets/img-header.jpg'

function Header() {
  return(
    <div className="header">

        <img href="../../assets/img-header.jpg" alt="" />
        <div className='div-header'>
          <h1>PAPEL MULHER</h1>
          <p>coletiva feminista que lambe<br></br> 
            as ruas com poesia de mulheres</p>
          <button className='botao'>
            <a href='https://www.instagram.com/papel.mulher/' target='_blank'>Participe</a>
          </button>
        </div>
    </div>
  )
}

export default Header