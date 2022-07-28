import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import './home.css'
import imgsection1 from "../../assets/imgsection1.png"

function Home(){
    return(
        <>
            <Header />

                <section className="secao1">
                    <div className="apresentacao">
                        <h2>
                                Qual o papel da Papel Mulher?
                        </h2>

                        <div className="informacoes">
                            <p className="box1">
                            A coletiva nasce da ideia de que existe uma disputa de narrativa,
                            em especial no campo literário, que reconhece certos discursos, e 
                            outros não.  Afinal o que é literatura, quem pode produzir literatura? 
                            As mulheres escrevem? São publicadas? Sobre o que escrevem? A 
                            Papel Mulher nasce da certeza de que as mulheres escrevem por 
                            anos, apenas não foram e ainda não são reconhecidas como 
                            escritoras.
                            <a>
                                Ver mais
                            </a>
                            </p>

                            <img src={imgsection1}/>
                        </div>
                    </div>
                    
                </section>
                <section className="secao2">
                
                    <h2>
                        Nossas<span>diretrizes</span>
                    </h2>
                    <div className="conteudo">
                        
                            <div className="item">
                                <h3>
                                    Nosso objetivo
                                </h3>
                                <p>
                                é encher as ruas e a vida das pessoas com palavras 
                                e histórias de mulheres pois acreditamos, assim, 
                                criar um mundo melhor, um mundo que tenha e 
                                respeite muitas e diversas vozes.
                                </p>
                            </div>
                            <div className="item">
                                <h3>
                                    Não toleramos
                                </h3>
                                <p>
                                    nenhum tipo de violência, seja ela física ou 
                                    psicológica entre as membras da coletiva.
                                </p>
                            </div>  
                                           
                        
                            <div className="item">
                                <h3>
                                    Não permitimos
                                </h3>
                                <p>
                                    discursos de ódio, nem nenhum comportamento que 
                                    possa ser reconhecido como transfóbico, 
                                    homofóbico, machista, etc.
                                </p>
                            </div>
                            <div className="item">
                                <h3>
                                    Não está liberada
                                </h3>
                                <p>
                                    a vendas dos lambes e produtos que não sejam 
                                    feitos pela organização da coletiva.
                                </p>
                            </div>
                        
                    </div>
                </section>

            <Footer /> 
        </>
    )
}

export default Home