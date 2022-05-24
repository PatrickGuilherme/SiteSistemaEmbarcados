import React from "react";
import './style.css'
import ImgEmbarcado from '../../assets/embarcado.png'

function Titulo(){
    return (
        <div className="tituloBanner">
            <img src={ImgEmbarcado} className="imagem"/>
            <h1 className="title">Sistemas <br/>Embarcados</h1>
        </div>
    );
}
export default Titulo;