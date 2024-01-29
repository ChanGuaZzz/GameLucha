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
import "animate.css";

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
  const [estad, setestad] = useState(false);
  const [mensajeLucha, setMensajeLucha] = useState();
  const [movimientoD, setmovimientoD] = useState(false);
  const [movimientoI, setmovimientoI] = useState(false);
  const [disablee, setdisablee] = useState(false);
  const [vidacero, setvidacero] = useState(false);
  const jugador1 = useRef(new Jugador(nombre));
 
  


  useEffect(() => {
    jugador1.current = new Jugador(nombre);
    jugador1.current.calcularFuerza();
  }, [nombre]);

  var enemigoRandom = useRef(
    Enemigos[Math.floor(Math.random() * Enemigos.length)]
  );
  var Enemigo1 = useRef(new Enemigo());
  var oroSoltado = useRef(0);
  var vidaPerdida = useRef(0);

  const [coleta, setcoleta] = useState(false);
  const [navaja, setnavaja] = useState(false);
  const [magueli, setmagueli] = useState(false);
  const [laravel, setlaravel] = useState(false);
  const [insu, setinsu] = useState(false);

const col=()=>{
  if(jugador1.current.getDinero()>=50){

setcoleta(true);
jugador1.current.setDinero(jugador1.current.getDinero()-50)
jugador1.current.setPuntosSalud(jugador1.current.getPuntosSalud()*2);
  }else{
    setinsu(true)
  }
};

const nav=()=>{
  if(jugador1.current.getDinero()>=20){
  setnavaja(true);

  jugador1.current.setDinero(jugador1.current.getDinero()-20)
  jugador1.current.setPuntosAtaque(jugador1.current.getPuntosAtaque()+2)
}else{ setinsu(true)}
};

const mag=()=>{
  if(jugador1.current.getDinero()>=40){
  setmagueli(true);
  jugador1.current.setDinero(jugador1.current.getDinero()-40)
  jugador1.current.setPuntosSalud(jugador1.current.getPuntosSalud()+3)
  jugador1.current.setPuntosAtaque(jugador1.current.getPuntosAtaque()+3)
}else{ setinsu(true)}
};

const lav=()=>{
  if(jugador1.current.getDinero()>=2){
  setlaravel(true);
  jugador1.current.setDinero(jugador1.current.getDinero()-2)
  jugador1.current.setPuntosAtaque(jugador1.current.getPuntosAtaque()+1)
}else{ setinsu(true)}
};


  const luchar = () => {
if(jugador1.current.getPuntosSalud()>0){


    enemigoRandom.current =
      Enemigos[Math.floor(Math.random() * Enemigos.length)];
    Enemigo1.current = new Enemigo(enemigoRandom.current.nombre);
    Enemigo1.current.fuerzaEnemigo();
    setMensajeLucha();
    setlucha(true);
    setshowMenu(false);
    setmovimientoD(true);
    setmovimientoI(true);

    setTimeout(() => {
      console.log("luchaaaa");
      if (
        jugador1.current.getPuntosAtaque() >= Enemigo1.current.getPuntosAtaque()
      ) {
        setMensajeLucha(true);
        oroSoltado.current = Math.floor(Math.random() * 20 + 1);
        jugador1.current.setDinero(
          jugador1.current.getDinero() + oroSoltado.current
        );
        console.log(jugador1.current.mostrar());
      } else {
        setMensajeLucha(false);
        vidaPerdida.current =
          Enemigo1.current.getPuntosAtaque() -
          jugador1.current.getPuntosAtaque();
        jugador1.current.setPuntosSalud(
          jugador1.current.getPuntosSalud() - vidaPerdida.current
        );

        console.log(jugador1.current.mostrar());
      }
    }, 2000);

  }else{
setvidacero(true);
setshowMenu(false);
  }
  };

  const items = () => {
    setTienda(true);
    setshowMenu(false);
  };

  const volver = () => {
    setlucha(false);
    setTienda(false);
    setshowMenu(true);
    setinsu(false);
    setestad(false);
  };

  const iniciobloque = () => {
    setPrimerOpcion(false);
    setinicio(true);
    setshowMenu(false);
    setdisablee(false);
    setvidacero(false);

    jugador1.current = new Jugador(nombre);

  };

  const inicializar = (event) => {
    jugador1.current.calcularFuerza();
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
    setestad(false);
  };

  const estadisticas = () => {
    console.log(jugador1.current.mostrar());
setestad(true);
setshowMenu(false);
  };
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
          Tu Fuerza inicial es:{jugador1.current.getPuntosAtaque()} <br></br>
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
        {insu?<h4 style={{color: "orange"}}>Dinero insuficiente</h4>:""}
        <button onClick={col}>Coleta Isak (Duplica los puntos de vida)---50$</button>
        {coleta?<h4 style={{color: "green"}}>Comprado</h4>:""}
        <button onClick={nav}>Navaja Mariposa (da 2 puntos de fuerza)---20$</button>
        {navaja?<h4 style={{color: "green"}}>Comprado</h4>:""}
        <button onClick={mag}>Magueli de Takician (da 3 de fuerza y 3 de vida)---40$</button>
        {magueli?<h4 style={{color: "green"}}>Comprado</h4>:""}
        <button onClick={lav}>Laravel Cursos Antonio (da 1 de fuerza)---2$</button>
        {laravel?<h4 style={{color: "green"}}>Comprado</h4>:""}
        <br></br>
        <button onClick={volver}>Volver</button>
      </div>
      
     

      <div className={vidacero ? "" : "hide"}>

      <h1>  No tienes vida suficiente</h1>
      <button onClick={iniciobloque}>💢Empezar de nuevo</button>

      </div>
{/* estadisticas*/}
      <div className={estad ? "" : "hide"}>

      <h1>  Estadisticas</h1>
      <h3>Nombre:{jugador1.current.getNombre()}</h3>
      <h3>Salud:{jugador1.current.getPuntosSalud()}</h3>
      <h3>Ataque:{jugador1.current.getPuntosAtaque()}</h3>
      <h3>Oro:{jugador1.current.getDinero()}</h3>
      <button onClick={volver}>Volver</button>
      </div>


      {/* Lucha*/}
      <div className={lucha ? "" : "hide "}>
        <div className="flex">
          {}
          <section>
            <h3>{jugador1.current.getNombre()}</h3>
            <img
              className={
                movimientoD
                  ? "animate__animated animate__fast animate__repeat-3 animate__bounce"
                  : ""
              }
              src={tu}
            ></img>
          </section>
          VS
          <section>
            <h3> {Enemigo1.current.getNombre()}</h3>
            <img
              className={
                movimientoI
                  ? "animate__animated animate__fast animate__repeat-3 animate__wobble"
                  : ""
              }
              src={enemigoRandom.current.img}
            ></img>
          </section>
          {mensajeLucha == null ? (
            ""
          ) : mensajeLucha ? (
            <div className="modal">
              <h1>Ganaste contra {Enemigo1.current.getNombre()} </h1>
              <h3>Has ganado {oroSoltado.current} de oro</h3>
              <h3>Oro: {jugador1.current.getDinero()} </h3>
              <button onClick={volver}>Volver</button>
            </div>
          ) : (
            <div className="modal">
              <h1>Perdiste contra {Enemigo1.current.getNombre()} </h1>
              <h3>Has perdido {vidaPerdida.current} puntos de salud</h3>
              <h3>Salud actual: {jugador1.current.getPuntosSalud()} </h3>
              <button onClick={volver}>Volver</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
