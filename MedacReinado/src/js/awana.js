
// awana.js

// Clase Jugador
export class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos_ataque = 0;
        this.puntos_salud = 20;
        this.dinero = 2;
    }

    // Métodos de instancia
    getNombre() {
        return this.nombre;
    }

    getPuntosSalud() {
        return this.puntos_salud;
    }

    getPuntosAtaque() {
        return this.puntos_ataque;
    }

    getDinero() {
        return this.dinero;
    }

    setNombre(valor) {
        this.nombre = valor;
    }

    setPuntosSalud(valor) {
        this.puntos_salud = valor;
    }

    setPuntosAtaque(valor) {
        this.puntos_ataque = valor;
    }

    setDinero(valor) {
        this.dinero = valor;
    }

    mostrar() {
        return `Jugador: ${this.nombre}\nPuntos de salud: ${this.puntos_salud}\nPuntos de ataque: ${this.puntos_ataque}\nDinero: ${this.dinero}`;
    }

    calcularFuerza() {
        this.puntos_ataque = Math.floor(Math.random() * 10 + 1);
        return this.puntos_ataque;
    }
}

// Clase Enemigo
export class Enemigo {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos_ataque = 0;
    }

    // Métodos de instancia
    getNombre() {
        return this.nombre;
    }

    getPuntosAtaque() {
        return this.puntos_ataque;
    }

    setNombre(valor) {
        this.nombre = valor;
    }

    setPuntosAtaque(valor) {
        this.puntos_ataque = valor;
    }

    fuerzaEnemigo() {
        this.puntos_ataque = Math.floor(Math.random() * 10 + 1);
    }
}


// function Main() {
//     var Enemigos = ["Isaak.json", "SilviaDestroyer", "ElJotaEse", "TheEnglish", "DesplegadoraDeMundos"];
//     console.log('\n'.repeat(20));
//     console.log("\n Introduccion\n En un mundo de magia, Tu, un estudiante, se enfrenta a maestros poseídos por fuerzas oscuras en su academia. Armado con habilidades en desarrollo, busca liberar a sus mentores y restaurar la paz, enfrentando un destino que lo desafía a convertirse en el héroe que el mundo mágico necesita.\n\n");
//     var nombre = readlineSync.question("Ingrese su nombre: ");
//     var Jugador1 = new Jugador(nombre);
//     console.log('\n'.repeat(20));
//     console.log("\n~~~~Bienvenido al Juego ".concat(nombre, "~~~~\n"));
//     console.log("Calculando Fuerza inicial...");
//     console.log("---Tu Fuerza inicial es: ".concat(Jugador1.calcularFuerza(), "---"));
//     var opcion;
//     console.log("\n Tienes ".concat(Jugador1.getDinero(), " de oro"));
//     opcion = readlineSync.question("\n1. CAMBIAR FUERZA POR UNO DE ORO \n 2.Continuar con la fuerza actual\n :");
//     console.log('\n'.repeat(20));
//     if (opcion == 1) {
//         console.log("\n\n<<<<Tu nueva fuerza es ".concat(Jugador1.calcularFuerza(), ">>>>"));
//         Jugador1.setDinero(Jugador1.getDinero() - 1);
//         console.log("\nTu dinero es: ".concat(Jugador1.getDinero(), "\n"));
//         var Continuar = readlineSync.question("Enter para continuar");
//     }
//     do {
//         console.log('\n'.repeat(20));
//         console.log("--------Elige una opcion--------\n 1.Luchar contra el enemigo\n 2. Comprar \u00EDtems\n 3. Consultar tus estad\u00EDsticas\n 4. Salir del juego");
//         var eleccion = parseInt(readlineSync.question("Eleccion: "));
//         switch (eleccion) {
//             case 1:
//                 console.log('\n'.repeat(20));
//                 console.log("\n\n------------Luchar contra el enemigo-------------");
//                 var Enemigo1 = new Enemigo(Enemigos[Math.floor(Math.random() * Enemigos.length)]);
//                 Enemigo1.FuerzaEnemigo();
//                 if (Jugador1.getPuntosAtaque() >= Enemigo1.getPuntos_ataque()) {
//                     console.log('\n'.repeat(20));
//                     console.log("\n\uD83D\uDCA6HAS GANADO LA BATALLA CONTRA ".concat(Enemigo1.getNombre(), " FELICIDADES\uD83D\uDCA6"));
//                     var oroSoltado = Math.floor(Math.random() * 20 + 1);
//                     Jugador1.setDinero(Jugador1.getDinero() + oroSoltado);
//                     console.log("\uD83D\uDCB2GANASTE ".concat(oroSoltado, "\uD83D\uDCB2"));
//                 }
//                 else {
//                     console.log('\n'.repeat(20));
//                     if (Jugador1.getPuntosSalud() <= 0) {
//                         console.log("No tienes vida, No puedes jugar mas, reinicia el juego");
//                     }
//                     else {
//                         console.log("\uD83D\uDCA2has perdido la batalla contra ".concat(Enemigo1.getNombre(), "\uD83D\uDCA5"));
//                         var daño = Enemigo1.getPuntos_ataque() - Jugador1.getPuntosAtaque();
//                         Jugador1.setPuntosSalud(Jugador1.getPuntosSalud() - daño);
//                         console.log("has perdido ".concat(daño, " de salud \uD83D\uDE25"));
//                     }
//                 }
//                 var Continuar = readlineSync.question("Enter para continuar");
//                 break;
//             case 2:
//                 console.log('\n'.repeat(20));
//                 console.log("\n\n------------Comprar ítems-------------");
//                 console.log("1.Coleta Isak (Duplica los puntos de vida)---50$");
//                 console.log("2.Navaja Mariposa (da 2 puntos de fuerza)---20$");
//                 console.log("3.Magueli de Takician (da 3 de fuerza y 3 de vida)---40$");
//                 console.log("4.Laravel Cursos Antonio (da 1 de fuerza)---2$");
//                 var eleccionitem = parseInt(readlineSync.question("\nEleccion de item: "));
//                 switch (eleccionitem) {
//                     case 1:
//                         console.log('\n'.repeat(20));
//                         if (Jugador1.getDinero() < 50) {
//                             console.log("No tienes dinero suficiente");
//                         }
//                         else {
//                             Jugador1.setDinero(Jugador1.getDinero() - 50);
//                             Jugador1.setPuntosSalud(Jugador1.getPuntosSalud() * 2);
//                             console.log("Conseguiste la coleta de isak!!");
//                         }
//                         break;
//                     case 2:
//                         console.log('\n'.repeat(20));
//                         if (Jugador1.getDinero() < 20) {
//                             console.log("No tienes dinero suficiente");
//                         }
//                         else {
//                             Jugador1.setDinero(Jugador1.getDinero() - 20);
//                             Jugador1.setPuntosAtaque(Jugador1.getPuntosAtaque() + 2);
//                             console.log("Conseguiste Navaja Mariposa!!");
//                         }
//                         break;
//                     case 3:
//                         console.log('\n'.repeat(20));
//                         if (Jugador1.getDinero() < 40) {
//                             console.log("No tienes dinero suficiente");
//                         }
//                         else {
//                             Jugador1.setDinero(Jugador1.getDinero() - 40);
//                             Jugador1.setPuntosSalud(Jugador1.getPuntosSalud() + 3);
//                             Jugador1.setPuntosAtaque(Jugador1.getPuntosAtaque() + 3);
//                             console.log("Conseguiste Magueli de Takician!!");
//                         }
//                         break;
//                     case 4:
//                         console.log('\n'.repeat(20));
//                         if (Jugador1.getDinero() < 2) {
//                             console.log("No tienes dinero suficiente");
//                         }
//                         else {
//                             Jugador1.setDinero(Jugador1.getDinero() - 2);
//                             Jugador1.setPuntosAtaque(Jugador1.getPuntosAtaque() + 1);
//                             console.log("Conseguiste Laravel Cursos Antonio!!");
//                         }
//                         break;
//                 }
//                 var Continuar = readlineSync.question("\nEnter para continuar");
//                 break;
//             case 3:
//                 console.log('\n'.repeat(20));
//                 console.log("\n\n------------Consultar tus estadísticas-------------");
//                 console.log(Jugador1.Mostrar());
//                 var Continuar = readlineSync.question("Enter para continuar");
//                 break;
//         }
//     } while (eleccion != 4);
// }
// Main();

