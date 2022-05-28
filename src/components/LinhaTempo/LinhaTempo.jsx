import React,{useState} from "react";
import './style.css'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Imagem1961 from "../../assets/missel.jpg";
import Imagem1990 from "../../assets/1990.jpg";
import Imagem1980 from "../../assets/sistema-soc.jpg";
import Imagem1970 from "../../assets/AirData.jpg";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function LinhaTempo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    let tituloTag = ( <p>{{titulo}}</p>);
    let descricaoTag = ( <p>{descricao}</p>);

    const Set1961 = () => {
        setTitulo("Minuteman míssil balístico intercontinental - USA");
        setDescricao("O primeiro sistema de computação embarcada data de 1961 desenvolvido para o Minuteman míssil balístico intercontinental da Força Aérea dos EUA. Na sua construção foram utilizados transistores discretos e portas lógicas.");
        setImgUrl(Imagem1961);
        setOpen(true);
    }

    const Set1970 = () => {
        setTitulo("Air Data Computer Central");
        setDescricao("Foi primeiro sistema embarcado baseado em microprocessador, incorporado ao avião F-14 Tomcat Lançado em 1970, este sistema embarcado lidou com q electrónica a bordo dos aviões, tratamento de vôo, e cálculo do balanço de configuração de asa do F-14, além de fornecerem informações sobre a velocidade do cockpit do ar e altitude");
        setImgUrl(Imagem1970);
        setOpen(true);
    }

    const Set1980 = () => {
        setTitulo("Sistemas on a Chip");
        setDescricao("Sistemas embarcados tomou no mercado comercial na década de 1980, devido em grande parte à integração (sistemas-on-a-chip). Estes combinam um microprocessador, RAM , controladores de entrada /saída e quaisquer outros sistemas de controles relacionados com a função em um pacote de circuito integrado");
        setImgUrl(Imagem1980);
        setOpen(true);
    }

    const Set1990 = () => {
        setTitulo("1990");
        setDescricao("Movendo-se em direção a celulares e computadores de mão multiuso. Um aspecto chave que mudou é que os processadores de 32 bits maduras e ferramentas de desenvolvimento mais fáceis de usar, têm aumentado o poder computacional disponível tremendamente , enquanto que muitas das restrições de energia elétrica caíram com modernas técnicas de fabricação de CPU.");
        setImgUrl(Imagem1990);
        setOpen(true);
    }

    return(
        <>
            <div className="linha">
                <div className="tempo temp1" data-toggle="tooltip" data-html="true" title="2000">
                    <a onClick={Set1961}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=" #ffffff" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <span>1961</span>
                    </a>
                </div>

                <div className="tempo temp2" data-toggle="tooltip" data-html="true" title="2001">
                    <a onClick={Set1970}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=" #ffffff" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <span>1970</span>
                    </a>
                </div>

                <div className="tempo temp3" data-toggle="tooltip" data-html="true" title="2005">
                    <a onClick={Set1980}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=" #ffffff" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <span>1980</span>                
                    </a>
                </div>
                <div className="tempo temp4" data-toggle="tooltip" data-html="true" title="2008">
                    <a onClick={Set1990}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=" #ffffff" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <span>1990</span>
                    </a>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{titulo}</h5>
                            <button onClick={handleClose} type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="imgModal">
                                <img src={imgUrl} width="35%" />
                            </div>
                            {descricaoTag}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default LinhaTempo;

