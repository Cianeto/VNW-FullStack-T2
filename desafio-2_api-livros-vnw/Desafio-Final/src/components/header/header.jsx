import React from "react";
//mportando estilo da header
import S from "./header.module.scss"
//importando as img
import Logo from "../../assets/img/Logologo.png"
import Lupa from "../../assets/img/lupa.png"
//importando as rotas
import Inicio from "../../Pages/Inicio/Inicio"
import Doados from "../../Pages/Doados/Doados"
import QueroDoar from "../../Pages/Quero Doar/QueroDoar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Header() {
  return (
    <BrowserRouter>
    <header>
        <section className={S.LogoHeader}>
        <Link to="/">
        <img className={S.Logo} src={Logo} alt="Imagem de ilustração de livro aberto com capa azul" />           
        </Link>
        <h2>Livros Vai na Web</h2>
        </section>

        <nav className={S.nav}>
            <ul>
            <li className={S.Inicio}><Link className={S.link} to="/">Início</Link></li>
            <li className={S.Livros}><Link className={S.link} to="Doados">Livros Doados</Link></li>
            <li className={S.Quero}><Link className={S.link} to="QueroDoar">Quero Doar</Link></li>
            </ul>
        </nav>
        <section className={S.BarradeBusca}>
          <input className={S.BoxInput}
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img src={Lupa} alt="Icone de lupa branca" />
          </button>
        </section>
    </header>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/Doados" element={<Doados/>}/>
      <Route path="/QueroDoar" element={<QueroDoar/>}/>
    </Routes>
    </BrowserRouter>
  );
  

}

export default Header;
