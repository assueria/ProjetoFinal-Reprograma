import Footer from "../../components/Footer/Footer"
import imgqrcode from "../../assets/imgqrcode.png"
import imgsection6 from "../../assets/imgsection6.png"
import "./contribua.css"

function Contribua(){
    return(
        <>
        <section className="pagina">
            <h2>
                Gostaria de contribuir com o trabalho  da Papel Mulher?
            </h2>
            <div className="sectionGeral">
                <div className="divInformacao">
                    <p>
                        A papel.mulher quer crescer para outras ruas, espalhar a escrita de mulheres no máximo de esquinas que pudermos ir, 
                        e você pode ajudar compartilhando e/ou contribuindo financeiramente.
                        Vale lembrar que nossa coletiva não tem fins lucrativos, todo dinheiro que entra vira palavras de mulheres. 
                        É possível contribuir através do QR CODE ao lado, e pelo nosso pix: papelmulher@gmail.com
                    </p>
                    <img src={imgsection6}/>
                </div>
                <div>
                    <img src={imgqrcode}/>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Contribua