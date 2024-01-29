import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Jugador, Enemigo } from "./js/awana";
import isak from "./img/isak.png";
import silvia from "./img/silvia.png";
import jotaese from "./img/jotaese.png";
import english from "./img/english.png";
import despliegue from "./img/despliegue.png";
import tu from "./img/tu.png";
import 'animate.css'

function App() {
  var Enemigos = [
    { nombre: "Isaak.json", img: isak },
    { nombre: "SilviaDestroyer", img: silvia },
    { nombre: "ElJotaEse", img: jotaese },
    { nombre: "TheEnglish", img: english },
    { nombre: "Desplegadora De Mundos", img: despliegue },
  ];

  const [nombre, setnombre] = useState("");

  const [inicio, setinicio] = useState(true);
  const [primerOpcion, setPrimerOpcion] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [lucha, setlucha] = useState(false);
  const [tienda, setTienda] = useState(false);
  const [mensajeLucha, setMensajeLucha] = useState();
  const [movimientoD, setmovimientoD] = useState(false);
  const [movimientoI, setmovimientoI] = useState(false);

  const [disablee, setdisablee] = useState(false);


  const jugador1 = useRef(new Jugador(nombre)) ;
  
  useEffect(()=>{

    jugador1.current=new Jugador(nombre);

  },[nombre]);


  

  var enemigoRandom = useRef(Enemigos[Math.floor(Math.random() * Enemigos.length)]);
  
  
  var Enemigo1 = useRef(new Enemigo());

  Enemigo1.current.fuerzaEnemigo();
  var oroSoltado=useRef(0);
  var vidaPerdida=useRef(0)


  const luchar = () => {
    enemigoRandom.current = Enemigos[Math.floor(Math.random() * Enemigos.length)];
    Enemigo1.current=new Enemigo(enemigoRandom.current.nombre)
    setMensajeLucha();
    setlucha(true);
    setshowMenu(false);
    setmovimientoD(true);
    setmovimientoI(true);


    setTimeout(() => {
      console.log("luchaaaa")
      if (jugador1.current.getPuntosAtaque() >= Enemigo1.current.getPuntosAtaque()) {
        setMensajeLucha(true);
        oroSoltado.current = Math.floor(Math.random() * 20 + 1);
        jugador1.current.setDinero( jugador1.current.getDinero()+oroSoltado.current)
        console.log(jugador1.current.mostrar());
      } else {
        setMensajeLucha(false);
vidaPerdida.current=Enemigo1.current.getPuntosAtaque()-jugador1.current.getPuntosAtaque();
jugador1.current.setPuntosSalud(jugador1.current.getPuntosSalud()-vidaPerdida.current)
      
console.log(jugador1.current.mostrar());
}
    }, 2000);
  };

  const items = () => {
    setTienda(true);
    setshowMenu(false);
  };

  const volver = () => {
    setlucha(false);
    setTienda(false);
    setshowMenu(true);
  };

  const iniciobloque = () => {
    setPrimerOpcion(false);
    setinicio(true);
    setshowMenu(false);
    setdisablee(false);
  };

  const inicializar = (event) => {
    event.preventDefault();
    setPrimerOpcion(true);
    setinicio(false);
    setshowMenu(false);
    console.log(jugador1.current.mostrar());
  };

  const cambiarfuerza = () => {
    jugador1.current.calcularFuerza();
    setdisablee(true);
    jugador1.current.setDinero(jugador1.current.getDinero() - 1);
    console.log(jugador1.current.mostrar());
  };

  const Menu = () => {
    setPrimerOpcion(false);
    setinicio(false);
    setshowMenu(true);
  };

  const estadisticas = () => {

    console.log(jugador1.current.mostrar());

  }
  return (
    <>
      {/* INICIO */}
      <div className={inicio ? "" : "hide"}>
        <h1>REINADO MEDAC</h1>

        <form onSubmit={inicializar}>
          <input
            type="text"
            required
            placeholder="Nombre del jugador"
            onInput={(event) => {
              setnombre(event.target.value);
            }}
          />
          <br></br>
          <button>Jugar</button>
        </form>
      </div>
      {/* PRIMER OPCION */}

      <div className={primerOpcion ? "" : "hide"}>
        <h2>
          <code>Bienvenido al juego </code>
          {jugador1.current.getNombre()}
          <br />
          <br />
          Tu Fuerza inicial es:{jugador1.current.calcularFuerza()} <br></br>
          <br />
          <code>Oro : </code>
          {jugador1.current.getDinero()}
        </h2>
        {disablee ? (
          <button style={{ opacity: 0.3 }} disabled>
            Cambiar la fuerza inicial por 1 de oro
          </button>
        ) : (
          <button onClick={cambiarfuerza}>
            Cambiar la fuerza inicial por 1 de oro
          </button>
        )}

        <button onClick={Menu}>Continuar</button>
      </div>

      {/* MENU*/}
      <div className={showMenu ? "" : "hide"}>
        <h2>Menu</h2>
        <button onClick={luchar}>🪓Luchar Contra un enemigo🔪</button>
        <button onClick={items}>🎁Comprar Items</button>
        <button onClick={estadisticas}>✅Consultar estadisticas</button>
        <button onClick={iniciobloque}>💢Salir del juego</button>
      </div>

      {/* Tienda*/}

      <div className={tienda ? "" : "hide"}>
        <h3>Tu oro es de: {jugador1.current.getDinero()}</h3>
        <button>Coleta Isak (Duplica los puntos de vida)---50$</button>
        <button>Navaja Mariposa (da 2 puntos de fuerza)---20$</button>
        <button>Magueli de Takician (da 3 de fuerza y 3 de vida)---40$</button>
        <button>Laravel Cursos Antonio (da 1 de fuerza)---2$</button>
        <br></br>
        <button onClick={volver}>Volver</button>
      </div>

      {/* Lucha*/}
      <div className={lucha ? "" : "hide "}>
        <div className="flex">
          {}
          <section>
            <h3>{jugador1.current.getNombre()}</h3>
            <img className={movimientoD?"animate__animated animate__fast animate__repeat-3 animate__bounce":""}
             src={tu}></img>
          </section>
          VS
          <section>
            <h3> {Enemigo1.current.getNombre()}</h3>
            <img className={movimientoI?"animate__animated animate__fast animate__repeat-3 animate__wobble":""}
             src={enemigoRandom.current.img}></img>
          </section>


          {mensajeLucha == null ? "" : mensajeLucha?
          <div className="modal"><h1>Ganaste contra {Enemigo1.current.getNombre()} </h1>
          <h3>Has ganado {oroSoltado.current} de oro</h3>
          <h3>Oro: {jugador1.current.getDinero()} </h3>
          <button onClick={volver}>Volver</button>
          
          </div>
          
          :

          <div className="modal"><h1>Perdiste contra {Enemigo1.current.getNombre()} </h1>
           <h3>Has perdido {vidaPerdida.current} puntos de salud</h3>
           <h3>Salud actual: {jugador1.current.getPuntosSalud()} </h3>
           <button onClick={volver}>Volver</button>
           </div>
          }


        </div>
        
      </div>
    </>
  );
}

export default App;
