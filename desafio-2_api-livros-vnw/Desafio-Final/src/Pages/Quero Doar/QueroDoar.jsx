import React from "react";
import S from "./querodoar.module.scss"
import Livro from "../../assets/img/Book.png"

//importar o axios e useState
import axios from "axios"
import { useState } from "react";

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria]= useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async() => {

        const urlApi = "https://api-livros-ll30.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url,
        }


        await axios.post(urlApi,dadosEnviar)

        alert("Livro Enviado")

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }


    const capturaTitulo = (e)=> {
        setTitulo(e.target.value)
        console.log(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) => {
        setImagem_url(e.target.value);
    }    

    return(
        <section className={S.Principal}>
            <section className={S.Container}>
        <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
        <form onSubmit={(e) => e.preventDefault()}>
        <div className={S.Descricao}>
            <img src={Livro} alt="Icone de um Livro" />
            <h3>Informações do Livro</h3>
        </div>
        <input type="text" placeholder="Titulo" onChange={capturaTitulo} value={titulo}/>
        <input type="text" placeholder="Categoria" onChange={capturaCategoria} value={categoria}/>
        <input type="text" placeholder="Autor"
        onChange={capturaAutor} value={autor}/>
        <input type="text" placeholder="Link da Imagem" onChange={capturaImagem} value={imagem_url}/>
        <input onClick={enviarDados} type="submit"  value="Doar"/>
        </form>
        </section>
        </section>
    )
}