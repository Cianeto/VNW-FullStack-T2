import React from "react";
import S from "./doados.module.scss"
import axios from 'axios';
import {useState, useEffect} from 'react'

export default function Doados(){

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://api-livros-ll30.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(()=>{
        getLivros();
    },[])
    

    return(
        <>
        <section className={S.Text}>     
           <h1>Livros Doados</h1>
        </section>
        <section className={S.boxLivros}>
            <div>
            
                {livros.map((item)=>(
                <article>
                 <img src={item.imagem_url} alt="" />
                 <h2>{item.titulo}</h2>
                  <p>{item.categoria}</p>
                  <p>{item.autor}</p>
                 </article>
                ))}
            </div>        
            </section>


        </>
    )
}