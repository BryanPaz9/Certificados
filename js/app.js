'use strict'
var id;
var img = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');

function modalView(id) {

    switch (id) {
        case 1:
            img.src= '../assets/img/academik/campos obligatorios.PNG';
            break;
        case 2:
            img.src = '../assets/img/academik/campos vacios.PNG';
            break;
        case 3:
            img.src = '../assets/img/academik/registro.PNG';
            break;
        case 4:
            img.src = '../assets/img/academik/generatedAcademik.PNG';
            break;
        case 5:
            img.src = '../assets/img/academik/certificate.PNG';
            break;

        default:
            console.log("Algo ha ido mal.");
            console.log(id+id);
            break;
    }

   
}

function modalViewOracle(id){
    switch (id) {
        case 1:
            img2.src= '../assets/img/oracle/controles.PNG';
            break;
        case 2:
            img2.src = '../assets/img/oracle/campos.PNG';
            break;
        case 3:
            img2.src = '../assets/img/oracle/director.PNG';
            break;
        case 4:
            img2.src = '../assets/img/oracle/firma.PNG';
            break;
        case 5:
            img2.src = '../assets/img/oracle/registro.PNG';
            break;
        case 6:
            img2.src = '../assets/img/oracle/generate.PNG';
            break;
        case 7:
            img2.src = '../assets/img/oracle/certificate.PNG'
            break;
        case 8:
            img2.src = '../assets/img/oracle/without.PNG';
            break;
        default:
            console.log("Algo ha ido mal.");
            console.log(id+id);
            break;
    }
}

function modalViewNabenik(id){
    switch (id) {
        case 1:
        img3.src= '../assets/img/nabenik/controls.PNG';
            break;

        case 2:
            img3.src= '../assets/img/nabenik/obligatorio.PNG';
            break;
        case 3:
            img3.src= '../assets/img/nabenik/registro.PNG';
            break;
        case 4:
            img3.src= '../assets/img/nabenik/generated.PNG';
            break;
        case 5:
        img3.src= '../assets/img/nabenik/certificate.PNG';
            break;
        default:
            console.log("ERROR");
            break;
    }
}
function modalViewOtros(id){
    switch (id) {
        case 1:
            img4.src='../assets/img/otros/eliminar.png';
            break;
        case 2:
            img4.src='../assets/img/otros/delete.png';
            break;
        case 3:
            img4.src='../assets/img/otros/certs.png';
            break;
        case 4:
            img4.src='../assets/img/otros/ruta.png';
            break;
        case 5:
            img4.src='../assets/img/otros/limpiar.png';
            break;
        case 6:
            img4.src='../assets/img/otros/clean.png';
            break;
        case 7:
            img4.src = '../assets/img/otros/info.png';
            break;
        case 8:
            img5.src = '../assets/img/home/json0.png';
            break;
        case 9:
            img5.src = '../assets/img/home/json.png';
            break;
        case 10:
            img4.src = '../assets/img/home/pais0.png';
            break;
        case 11:
            img4.src = '../assets/img/home/ciudad0.png';
            break; 
        case 12:
            img4.src = '../assets/img/home/pais1.png';
            break;
        case 13:
            img4.src = '../assets/img/home/ciudad1.png';
            break;    
        default:
            console.log("Error");
            break;
    }
}

function modalHome(id){
    switch(id){
        case 1:
            img5.src ='./assets/img/home/json0.PNG';
            break;
        case 2:
            img6.src = './assets/img/home/pais0.PNG';
            break;
        case 3:
            img6.src = './assets/img/home/ciudad0.PNG';    
            break;
        case 4:
            img5.src = './assets/img/home/json.PNG';
            break;
        case 5:
            img6.src = './assets/img/home/pais0.PNG';
            break;
        case 6:
            img6.src = './assets/img/home/ciudad1.PNG';
            break;

        default:
            console.log("ERROR");
            break;
    }

}
