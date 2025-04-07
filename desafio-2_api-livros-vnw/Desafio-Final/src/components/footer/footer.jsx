import React from "react";
import S from "./footer.module.scss"

import facebook from "../../assets/img/facebook.png"
import twitter from "../../assets/img/Twitter_Logo_WhiteOnImage 3.png"
import youtube from "../../assets/img/Youtube.png"
import linkedin from "../../assets/img/Linkedin.png"
import instagram from "../../assets/img/Instagram.png"


export default function Footer(){
    return(
        <footer className={S.Footerbox}>
            <section className={S.boxInfo}>
            <h3>4002-8922</h3>
            <nav className={S.BoxLogos}>
            <a href=""> <img src={facebook} alt="logo facebook" /> </a>
            <a href=""> <img src={twitter} alt="logo twitter" /> </a>
            <a href=""> <img src={youtube} alt="logo youtube" /> </a>
            <a href="https://www.linkedin.com/in/rebecabarceloz/"> <img src={linkedin} alt="logo linkedin" /> </a>
            <a href="https://www.instagram.com/becaziando/"> <img src={instagram} alt="logo instagram" /> </a>
            </nav>
            </section>
    
        <section className={S.BoxRodape}>
            <h4>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </h4>
        </section>

        </footer>
    )
}