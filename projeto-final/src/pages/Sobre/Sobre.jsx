import Footer from "../../components/Footer/Footer"
import imgsection3 from '../../assets/imgsection3.png'
import imgsection4 from '../../assets/imgsection4.png'
import imgsection5 from '../../assets/imgsection5.png'
import './sobre.css'

function Sobre(){
    return(
        <>
        <main>
            <section className="secao1Sobre">
                    <h2>
                        Quem faz a Papel Mulher?
                    </h2>
                <div className="parte1">
                    <p>
                        A coletiva Papel Mulher tem como objetivo divulgar a
                        escrita de mulheres através da colagem de lambe-lambe,
                        cartazes colados em ruas públicas. A coletiva surgiu 
                        em fevereiro deste ano, a partir de uma ideia que a Alexandra Maia, 
                        escritora e poetisa cearense, teve e chamou Julyana Mattos, 
                        carioca da Baixada Fluminense, e a Jessyka Ribeiro, 
                        uma outra amiga que é paraibana. A partir do abraço da ideia 
                        por muitas mulheres a coletiva tomou proporções inimagináveis e 
                        hoje é formada por mais de 150 mulheres, somos Amandas, Anas, Isabelas, 
                        Kellys, Renas, Wilmas, Cecílias, Lanas, Kamilas, Manuelas, Rafaelas, Vanessas, 
                        Alices, Sams, Mônicas, Anas, Beatrizes... Queremos ser mais e lamber os muros de cada vez mais cidades.
                    </p>
                    <img src={imgsection3}/>
                </div>
                <div className="parte2">
                    <img src={imgsection4}/>
                    <p> 

                        A coletiva preza pela autonomia das suas integrantes, mas conta com 
                        um grupo menor composto por nove mulheres e coordenado por Alexandra. 
                        Essas mulheres coordenam grupos menores. Temos um grupo de curadoria, 
                        organizado por Julyana Mattos e que conta com mais vinte mulheres, para fazer
                         seleções de poemas para virarem lambes. Outro grupo é composto por 
                         mulheres que fazem a arte do Lambe Digital e organizado por Alexandra Maia. 
                         Temos também um grupo com mulheres da área audiovisual, organizado por 
                         Vanessa Pessoa, com o objetivo de fazer vídeos para a página da Papel. 
                         Há, ainda, um grupo, coordenado por Kelly Martins, para pensar estratégias 
                         de vendas para produtos da Papel Mulher, de modo a gerar caixa a fim de que 
                         a coletiva financie suas ações e monte um caixa-fiança para que tenhamos 
                         dinheiro caso alguma mana da Papel seja apreendida colando lambe — já que, 
                         em algumas cidades, o lambe-lambe é considerado infração. 

                    </p>
                </div>
            </section>
            <section className="secao2Sobre">
                <div>
                    <h2>
                        Qual o papel da Papel Mulher?
                    </h2>
                    <p>
                        A coletiva nasce da ideia de que existe uma disputa de narrativa, em especial no campo literário, 
                        que reconhece certos discursos, e outros não.  Afinal o que é literatura, quem pode produzir 
                        literatura? As mulheres escrevem? São publicadas? Sobre o que escrevem?A Papel Mulher nasce 
                        da certeza de que as mulheres escrevem por anos, apenas não foram e ainda não são reconhecidas 
                        como escritoras. Temos escritoras mapeadas no Brasil desde 1800, por que, então, não estudamos 
                        essas mulheres em nossas aulas de literatura?  Nós mesmas, muitas vezes, crescemos escrevendo em 
                        nossos diários e mesmo depois de anos  praticando a escrita, temos vergonha de mostrar nossos escritos. 
                        Isso só acontece porque a sociedade nos fez pensar que esse lugar não era para nós, fazendo com que 
                        desde cedo nós só reconhecessemos como escritores: homens brancos, héteros, de classe média. 
                        A Papel Mulher veio mudar isso! Tem mulher escrevendo sobre todo e qualquer assunto, podemos provar.
                    </p>
                    <img src={imgsection5}/>
                    <p>
                        Escolhemos a intervenção nas ruas através do lambe-lambe por querer tornar a literatura acessível, 
                        ao rés-do-chão, ao alcance do olho de quem procura, passa e faz parte da rua. Entendemos a Literatura 
                        como direito de todas, todes, todos, apesar do que querem nos fazer acreditar, essa arte não é só destinada 
                        a uma parcela da sociedade com acesso ao dinheiro. Literatura não é coisa desvinculada da vida vivida. 
                        O silêncio que, por muitos anos, pairou sobre certos assuntos tais como machismo, racismo, homofobia, 
                        transfobia, entre outros, acabou! É possível fazer poesia com qualquer temática. 
                        É possível fazer transformação com poesia! Acreditamos na Literatura como um meio de transformação 
                        de subjetividades e, quem sabe, de transformação de sociedade.
                    </p>
                    <p>
                        Quem quiser colar precisa fazer parte da coletiva, para isso, nós temos um formulário e a 
                        partir das respostas nesse formulário a pessoa entra em um grupo de WhatsApp e combinamos as colagens. 
                        Temos um drive separado por autoras com todos os nossos lambes e ali a pessoa consegue baixar, imprimir 
                        e colar. Temos também reuniões mensais para ensinar a colar, então, todas as mulheres que querem colar, 
                        conseguem, basta entrar em contato pelo nosso Instagram. Tudo acontece lá e a nossa organização é feita principalmente pela internet.

                    </p>
                    <p>
                        A coletiva não possui fins lucrativos, todo dinheiro que entra se transforma em palavra de mulher. 
                        Elaboramos algumas formas de conseguir financiar as ações através de rifas com as artes das mulheres 
                        que fazem parte da coletiva, vendas de ecobags estampadas com palavras de mulher e abrimos nosso pix, 
                        como quem passa o chapéu. Toda contribuição é muito importante para que continuemos a existir. 
                        A coletiva possui um caixa para ajudar manas que não possuem dinheiro para colar e para nos prepararmos 
                        caso um dia tenhamos que pagar fiança de alguma mana, já que o lambe-lambe é considerado infração em algumas cidades.

                    </p>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default Sobre