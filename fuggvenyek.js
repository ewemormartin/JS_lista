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
export function tablazat(){
    let txt = "<table><tr>"
    for (let index = 0; index < SZEMELYLISTA.length; index++) {

        txt += `<th>${SZEMELYLISTA[index].nev}</th>`
        
        
    }
    txt += "</table></tr>"
    console.log(txt);
    return txt
}