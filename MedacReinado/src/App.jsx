import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Jugador, Enemigo } from "./js/awana";

function App() {
  var Enemigos = [
    {nombre:"Isaak.json", img= },
    "SilviaDestroyer",
    "ElJotaEse",
    "TheEnglish",
    "DesplegadoraDeMundos",
  ];

  const [nombre, setnombre] = useState("");

  const [inicio, setinicio] = useState(true);
  const [primerOpcion, setPrimerOpcion] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [lucha, setlucha] = useState(false);
  const [tienda, setTienda] = useState(false);

  const [disablee, setdisablee] = useState(false);

  var jugador1 = new Jugador(nombre);
  var Enemigo1 = new Enemigo(
    Enemigos[Math.floor(Math.random() * Enemigos.length)]
  );

  Enemigo1.fuerzaEnemigo();


  const luchar = () => {
    setlucha(true)
    setshowMenu(false);
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
    console.log(jugador1.mostrar());
  };

  const cambiarfuerza = () => {
    jugador1.calcularFuerza();
    setdisablee(true);
    jugador1.setDinero(jugador1.getDinero() - 1);
    console.log(jugador1.mostrar());
  };

  const Menu = () => {
    setPrimerOpcion(false);
    setinicio(false);
    setshowMenu(true);
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
          {jugador1.getNombre()}
          <br />
          <br />
          Tu Fuerza inicial es:{jugador1.calcularFuerza()} <br></br>
          <br />
          <code>Oro : </code>
          {jugador1.getDinero()}
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
        <button>✅Consultar estadisticas</button>
        <button onClick={iniciobloque}>💢Salir del juego</button>
      </div>

      {/* Tienda*/}

      <div className={tienda ? "" : "hide"}>
        <h3>Tu oro es de: {jugador1.getDinero()}</h3>
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
          <div>Tu: {jugador1.getNombre()}</div>
          VS
          <div>Enemigo: {Enemigo1.getNombre()}</div>
        </div>
      </div>
    </>
  );
}

export default App;
