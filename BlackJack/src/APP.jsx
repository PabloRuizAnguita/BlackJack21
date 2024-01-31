import './App.css'
import ficha1 from "./Imagenes/Ficha-1.png"
import ficha5 from "./Imagenes/Ficha-5.png"
import ficha10 from "./Imagenes/Ficha-10.png"
import ficha20 from "./Imagenes/Ficha-20.png"
import ficha50 from "./Imagenes/Ficha-50.png"

export function App() {
    return (
        <div className='rec'>
            <div className='rectangulo'>
                <div className='fichas'>
                    <img className='fichas-1' src={ficha1}></img>
                    <img className='fichas-5' src={ficha5}></img>
                    <img className='fichas-10' src={ficha10}></img>
                    <img className='fichas-20' src={ficha20}></img>
                    <img className='fichas-50' src={ficha50}></img>
                </div>
                <div className='Diler'>
                    <h2>Diler</h2>
                </div>
                <div className='Usuario'>
                    <h2>Jugardor 1</h2>
                </div>
                <div className='Btn'>
                    <button className='Btn-pedir'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>Pedir
                    </button>
                    <button className='Btn-plantarse'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>Parar
                    </button>
                </div>
            </div>
        </div>
    )
}
