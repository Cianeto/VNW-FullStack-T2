import React from "react";
import S from "./inicio.module.scss"
import icon1 from "../../assets/img/Icon1community.png"
import icon2 from "../../assets/img/Icon2reading.png"
import icon3 from "../../assets/img/Icon3transform.png"
import icon4 from "../../assets/img/Icon4balance.png"

export default function Inicio(){
    return(
        <>
        <section className={S.Post}>
        <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
        </section>
        <section className={S.BoxSection}>
            <h2>Por que devo doar?</h2>
           </section>
           <section>
            <div className={S.Boxcards}>
                <article>
                    <img src={icon1} alt="circulo de pessoas" />
                   <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </article>
                <article>
                <img src={icon2} alt="pessoa lendo" />
                <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </article><article>
                <img src={icon3} alt="pessoas unidas" />
                <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </article><article>
                <img src={icon4} alt="balança" />
                <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </article>
            </div>
        </section>
        </>
    )
}