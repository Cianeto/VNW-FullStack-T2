import logo from "../../assets/logo.png";
import lupa from "../../assets/lupa.png";

export default function header() {
	return (
		<header>
			<section>
				<img src={logo} alt="livro" />
				<h1>Livros Vai na Web</h1>
			</section>
			<nav>
				<ul>
					<li>Início</li>
					<li>Livros Doados</li>
					<li>Quero Doar</li>
				</ul>
			</nav>
			<div>
				<input type="text" />
				<img src={lupa} alt="lupa" />
			</div>
		</header>
	);
}
