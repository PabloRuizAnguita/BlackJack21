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


import AsDiamantes from "./img/ace_of_diamonds.png";
import dosDiamantes from "./img/2_of_diamonds.png";
import tresDiamantes from "./img/3_of_diamonds.png";
import cuatroDiamantes from "./img/4_of_diamonds.png";
import cincoDiamantes from "./img/5_of_diamonds.png";
import seisDiamantes from "./img/6_of_diamonds.png";
import sieteDiamantes from "./img/7_of_diamonds.png";
import ochoDiamantes from "./img/8_of_diamonds.png";
import nueveDiamantes from "./img/9_of_diamonds.png";
import diezDiamantes from "./img/10_of_diamonds.png";
import JDiamantes from "./img/jack_of_diamonds2.png";
import QDiamantes from "./img/queen_of_diamonds2.png";
import KDiamantes from "./img/king_of_diamonds2.png";

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

import AsEspadas from "./img/ace_of_spades.png";
import dosEspadas from "./img/2_of_spades.png";
import tresEspadas from "./img/3_of_spades.png";
import cuatroEspadas from "./img/4_of_spades.png";
import cincoEspadas from "./img/5_of_spades.png";
import seisEspadas from "./img/6_of_spades.png";
import sieteEspadas from "./img/7_of_spades.png";
import ochoEspadas from "./img/8_of_spades.png";
import nueveEspadas from "./img/9_of_spades.png";
import diezEspadas from "./img/10_of_spades.png";
import JEspadas from "./img/jack_of_spades2.png";
import QEspadas from "./img/queen_of_spades2.png";
import KEspadas from "./img/king_of_spades2.png";
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

        { img: AsDiamantes, valor: 11 },
        { img: dosDiamantes, valor: 2 },
        { img: tresDiamantes, valor: 3 },
        { img: cuatroDiamantes, valor: 4 },
        { img: cincoDiamantes, valor: 5 },
        { img: seisDiamantes, valor: 6 },
        { img: sieteDiamantes, valor: 7 },
        { img: ochoDiamantes, valor: 8 },
        { img: nueveDiamantes, valor: 9 },
        { img: diezDiamantes, valor: 10 },
        { img: JDiamantes, valor: 10 },
        { img: QDiamantes, valor: 10 },
        { img: KDiamantes, valor: 10 },

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

        { img: AsEspadas, valor: 11 },
        { img: dosEspadas, valor: 2 },
        { img: tresEspadas, valor: 3 },
        { img: cuatroEspadas, valor: 4 },
        { img: cincoEspadas, valor: 5 },
        { img: seisEspadas, valor: 6 },
        { img: sieteEspadas, valor: 7 },
        { img: ochoEspadas, valor: 8 },
        { img: nueveEspadas, valor: 9 },
        { img: diezEspadas, valor: 10 },
        { img: JEspadas, valor: 10 },
        { img: QEspadas, valor: 10 },
        { img: KEspadas, valor: 10 },
    ]);
    const numerorandom = () => {
        const numero = Math.floor(Math.random() * cartas.length);
        return numero;
    };

    const [cartasCompletas, setcartasCompletas] = useState([...cartas]);
    const [cartasCrupier, setcartasCrupier] = useState([cartas[numerorandom()]]);
    const [cartasJugador, setcartasJugador] = useState([cartas[numerorandom()]]);



    const pedircarta = () => {

        for (var i = 1; i < cartas.length; i++) {

        }

    }

    return (
        <div className='rec'>
            <div className='rectangulo'>
                <div className='Diler'>
                    <h2>Diler</h2>
                    <div>
                        {cartasJugador.map((carta, i) => (
                            <img key={i} src={carta.img} alt={`Carta ${i}`} />
                        ))}
                    </div>

                    <div className='Usuario'>
                        <h2>Jugardor 1</h2>
                    </div>
                    <div className='Btn'>
                        <button className='Btn-pedir' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>Pedir
                        </button>
                        <button className='Btn-plantarse'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>Parar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

