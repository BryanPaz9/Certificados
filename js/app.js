'use strict'
var id;
var img = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');

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
    if (id == '1'){
        img3.src= '../assets/img/nabenik/controls.PNG';
    }else if(id == '2'){
        img3.src = '../assets/img/nabenik/obligatorio.PNG';
    }else if(id =='3'){
        img3.src = '../assets/img/nabenik/registro.PNG';
    }else if(id == '4'){
        img3.src = '../assets/img/nabenik/generated.PNG';
    }else if(id == '5'){
        img3.src = '../assets/img/nabenik/certificate.PNG';
    }
}
function modalViewOtros(id){
    switch (id) {
        case 1:
            img4.src='../assets/img/otros/eliminar.PNG';
            break;
        case 2:
            img4.src='../assets/img/otros/delete.PNG';
            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
        
        default:
            console.log("Error");
            break;
    }
}