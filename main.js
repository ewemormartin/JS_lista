import { SZEMELYLISTA } from "./adat.js";
import { listaKir,tablazat } from "./fuggvenyek.js";

console.log(SZEMELYLISTA[0].nev);

listaKir(SZEMELYLISTA)


/* HTML elemek elérése: DOM elérése. */
const LISTAELEM= document.querySelector("#lista")
/* const LISTAELEM= document.getElementById("lista") */
console.log(LISTAELEM);
LISTAELEM.innerHTML="<h1>Cimlista</h1>"
LISTAELEM.innerHTML+= `
                    <ul>
                        <li>${SZEMELYLISTA[0].nev},${SZEMELYLISTA[0].tel}</li>
                        <li>${SZEMELYLISTA[1].nev},${SZEMELYLISTA[1].tel}</li>
                    </ul>

`
const TABLA = document.querySelector(".card")

