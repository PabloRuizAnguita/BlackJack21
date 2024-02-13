import './App.css'
import AsCorazones from "./img/ace_of_hearts.png";
import dosCorazones from "./img/2_of_hearts.png";
import tresCorazones from "./img/3_of_hearts.png";
import cuatroCorazones from "./img/4_of_hearts.png";
import cincoCorazones from "./img/5_of_hearts.png";
import seisCorazones from "./img/6_of_hearts.png";
import sieteCorazones from "./img/7_of_hearts.png";
import ochoCorazones from "./img/8_of_hearts.png";
import nueveCorazones from "./img/9_of_hearts.png";
import diezCorazones from "./img/10_of_hearts.png";
import JCorazones from "./img/jack_of_hearts2.png";
import QCorazones from "./img/queen_of_hearts2.png";
import KCorazones from "./img/king_of_hearts2.png";


import AsRombos from "./img/ace_of_diamonds.png";
import dosRombos from "./img/2_of_diamonds.png";
import tresRombos from "./img/3_of_diamonds.png";
import cuatroRombos from "./img/4_of_diamonds.png";
import cincoRombos from "./img/5_of_diamonds.png";
import seisRombos from "./img/6_of_diamonds.png";
import sieteRombos from "./img/7_of_diamonds.png";
import ochoRombos from "./img/8_of_diamonds.png";
import nueveRombos from "./img/9_of_diamonds.png";
import diezRombos from "./img/10_of_diamonds.png";
import JRombos from "./img/jack_of_diamonds2.png";
import QRombos from "./img/queen_of_diamonds2.png";
import KRombos from "./img/king_of_diamonds2.png";

import AsTrebol from "./img/ace_of_clubs.png";
import dosTrebol from "./img/2_of_clubs.png";
import tresTrebol from "./img/3_of_clubs.png";
import cuatroTrebol from "./img/4_of_clubs.png";
import cincoTrebol from "./img/5_of_clubs.png";
import seisTrebol from "./img/6_of_clubs.png";
import sieteTrebol from "./img/7_of_clubs.png";
import ochoTrebol from "./img/8_of_clubs.png";
import nueveTrebol from "./img/9_of_clubs.png";
import diezTrebol from "./img/10_of_clubs.png";
import JTrebol from "./img/jack_of_clubs2.png";
import QTrebol from "./img/queen_of_clubs2.png";
import KTrebol from "./img/king_of_clubs2.png";

import AsPicas from "./img/ace_of_spades.png";
import dosPicas from "./img/2_of_spades.png";
import tresPicas from "./img/3_of_spades.png";
import cuatroPicas from "./img/4_of_spades.png";
import cincoPicas from "./img/5_of_spades.png";
import seisPicas from "./img/6_of_spades.png";
import sietePicas from "./img/7_of_spades.png";
import ochoPicas from "./img/8_of_spades.png";
import nuevePicas from "./img/9_of_spades.png";
import diezPicas from "./img/10_of_spades.png";
import JPicas from "./img/jack_of_spades2.png";
import QPicas from "./img/queen_of_spades2.png";
import KPicas from "./img/king_of_spades2.png";
import { useEffect, useState } from 'react';

export default function App() {
    const [cartas, setCartas] = useState([
        { img: AsCorazones, valor: 11 },
        { img: dosCorazones, valor: 2 },
        { img: tresCorazones, valor: 3 },
        { img: cuatroCorazones, valor: 4 },
        { img: cincoCorazones, valor: 5 },
        { img: seisCorazones, valor: 6 },
        { img: sieteCorazones, valor: 7 },
        { img: ochoCorazones, valor: 8 },
        { img: nueveCorazones, valor: 9 },
        { img: diezCorazones, valor: 10 },
        { img: JCorazones, valor: 10 },
        { img: QCorazones, valor: 10 },
        { img: KCorazones, valor: 10 },

        { img: AsRombos, valor: 11 },
        { img: dosRombos, valor: 2 },
        { img: tresRombos, valor: 3 },
        { img: cuatroRombos, valor: 4 },
        { img: cincoRombos, valor: 5 },
        { img: seisRombos, valor: 6 },
        { img: sieteRombos, valor: 7 },
        { img: ochoRombos, valor: 8 },
        { img: nueveRombos, valor: 9 },
        { img: diezRombos, valor: 10 },
        { img: JRombos, valor: 10 },
        { img: QRombos, valor: 10 },
        { img: KRombos, valor: 10 },

        { img: AsTrebol, valor: 11 },
        { img: dosTrebol, valor: 2 },
        { img: tresTrebol, valor: 3 },
        { img: cuatroTrebol, valor: 4 },
        { img: cincoTrebol, valor: 5 },
        { img: seisTrebol, valor: 6 },
        { img: sieteTrebol, valor: 7 },
        { img: ochoTrebol, valor: 8 },
        { img: nueveTrebol, valor: 9 },
        { img: diezTrebol, valor: 10 },
        { img: JTrebol, valor: 10 },
        { img: QTrebol, valor: 10 },
        { img: KTrebol, valor: 10 },

        { img: AsPicas, valor: 11 },
        { img: dosPicas, valor: 2 },
        { img: tresPicas, valor: 3 },
        { img: cuatroPicas, valor: 4 },
        { img: cincoPicas, valor: 5 },
        { img: seisPicas, valor: 6 },
        { img: sietePicas, valor: 7 },
        { img: ochoPicas, valor: 8 },
        { img: nuevePicas, valor: 9 },
        { img: diezPicas, valor: 10 },
        { img: JPicas, valor: 10 },
        { img: QPicas, valor: 10 },
        { img: KPicas, valor: 10 },
    ]);
    const numerorandom = () => {
        const numero = Math.floor(Math.random() * cartas.length);
        return numero;
    };

    const [cartasCompletas, setcartasCompletas] = useState([...cartas]);
    const [cartasDiler, setcartasDiler] = useState([cartas[numerorandom()], cartas[numerorandom()]]);
    const [cartasUsuario, setcartasUsuario] = useState([cartas[numerorandom()]]);
    const [desaparecerBtn, setdesaparecerBtn] = useState(false);
    const [totalU, settotalU] = useState(0);
    const [totalD, settotalD] = useState(cartasUsuario.reduce((total, element) => total + element.valor, 0));



    const noneBtn = () => {
        setdesaparecerBtn(true);
    }

    useEffect(() => {
        const suma = cartasDiler.reduce((total, element) => total + element.valor, 0)
        settotalD(suma);
    }, [cartasDiler])

    useEffect(() => {
        const suma = cartasUsuario.reduce((total, element) => total + element.valor, 0)
        settotalU(suma);

    }, [cartasUsuario])

    useEffect(() => {
        console.log(totalU);
    }, [totalU])

    useEffect(() => {
        console.log(totalD);
    }, [totalD])

    const pedircartaU = () => {
        if (totalU < 21) {
            const proxCard = numerorandom();
            const cartasCopia = [...cartas];
            cartasCopia.splice(proxCard, 1);
            setCartas(cartasCopia);
            setcartasUsuario([...cartasUsuario, cartas[proxCard]]);
        } else {
            if (totalU > totalD && totalU <= 21) {
                alert("Ganaste");
            } else if (totalU == 21 && totalD > 21) {
                alert("BlackJack");
            } else if (totalU < 21 && totalD > 21) {
                alert("Ganaste");
            } else if (totalD == totalU) {
                alert("Lo siento hubo empate");
            } else if (totalD == 21 && totalU == 21) {
                alert("Empate");
            } else if (totalD > totalU && totalD <= 21) {
                alert("perdiste");
            } else if (totalU > 21) {
                alert("perdiste");
            }
        }

    }



    const cartaDiler = () => {
        if (totalD < 17) {
            const proxCard = numerorandom();
            const cartasCopia = [...cartas];
            cartasCopia.splice(proxCard, 1);
            setCartas(cartasCopia);
            setcartasDiler([...cartasDiler, cartas[proxCard]]);
        } else {
            if (totalU > totalD && totalU <= 21) {
                alert("Ganaste");
            } else if (totalU == 21 && totalD > 21) {
                alert("BlackJack");
            } else if (totalU < 21 && totalD > 21) {
                alert("Ganaste");
            } else if (totalD == totalU) {
                alert("Lo siento hubo empate");
            } else if (totalD == 21 && totalU == 21) {
                alert("Empate");
            } else if (totalD > totalU && totalD <= 21) {
                alert("perdiste");
            } else if (totalU > 21) {
                alert("perdiste");
            }
        }
    }






    return (
        <div className='rec'>
            <div className='rectangulo'>
            <div id='contador'>Cartas Jugador:{totalU} <br></br> Contador Diler:{totalD}</div>
                <div className='Diler'>
                    <div className='card-diler'>
                    {cartasDiler.map((carta, i) => (
                        !desaparecerBtn?
                                i==1?
                                <img className='negra' key={i} src={carta.img} alt={`Carta ${i}`} />
                                :
                                <img key={i} src={carta.img} alt={`Carta ${i}`} />
                                :
                                <img key={i} src={carta.img} alt={`Carta ${i}`} />
                            ))}
                    </div>
                    <h2>Diler</h2>
                    <div className='Usuario'>
                        <div className='card-jugador'>
                            {cartasUsuario.map((carta, i) => (
                                <img key={i} src={carta.img} alt={`Carta ${i}`} />
                            ))}
                        </div>
                        
                        <h2>Jugardor</h2>
                    </div>
                    <div className='Btn'>

                        {!desaparecerBtn && (
                            <>


                                <button className='Btn-pedir' onClick={pedircartaU} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>Pedir
                                </button>
                                <button className='Btn-plantarse' onClick={noneBtn}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>Parar
                                </button>


                            </>
                        )

                        }
                        <button className='Btn-diler' onClick={cartaDiler}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>Diler
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
