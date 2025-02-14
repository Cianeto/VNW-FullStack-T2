import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Inicio from "../../pages/inicio/Inicio";
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";
import logo from "../../assets/logo.png";
import lupa from "../../assets/lupa.png";
import S from "./header.module.scss";

export default function Header() {
	return (
		<BrowserRouter>
			<header className={S.header}>
				{/* Aqui na header colocamos uma className para evitar de haver conflitos futuramente. */}
				<section className={S.logoHeader}>
					<img src={logo} alt="logo livro" />
					<h1>Livros Vai na Web</h1>
				</section>
				<nav className={S.navHeader}>
					<ul>
						<li>
							<Link className={S.link} to="/">
								Início
							</Link>
						</li>
						<li>
							<Link className={S.link} to="/livrosdoados">
								Livros Doados
							</Link>
						</li>
						<li>
							<Link className={S.link} to="/querodoar">
								Quero Doar
							</Link>
						</li>
					</ul>
				</nav>
				<section className={S.barraDeBusca}>
					<input type="search" name="" id="" placeholder="O que você procura?" />
					<button>
						<img src={lupa} alt="ícone lupa" />
					</button>
				</section>
			</header>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/livrosdoados" element={<LivrosDoados />} />
				<Route path="/querodoar" element={<QueroDoar />} />
			</Routes>
		</BrowserRouter>
	);
}
