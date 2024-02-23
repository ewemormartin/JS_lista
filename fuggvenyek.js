import { SZEMELYLISTA } from "./adat.js";


export function listaKir(LISTA) {
    for (let i = 0; i < LISTA.length; i++) {
        console.log(LISTA[i].nev,LISTA[i].tel);
    }
    
    
}
export function listaOsszeallitas(){
    let txt=`<ul>`
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<li>${SZEMELYLISTA[index].nev},${SZEMELYLISTA[index].tel}</li>`
        
    }
    txt += "</ul>"
    console.log(txt);
    return txt
}
function tablazat(){
    let txt = "<table>"
    for (let index = 0; index < 4; index++) {
        
        
    }
}