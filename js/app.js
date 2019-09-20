'use strict'
var id;
var img = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

function modalView(id){
    if (id == '1'){
        img.src= '../assets/img/academik/campos obligatorios.PNG';
    }else if(id == '2'){
        img.src = '../assets/img/academik/campos vacios.PNG';
    }else if(id =='3'){
        img.src = '../assets/img/academik/registro.PNG';
    }else if(id == '4'){
        img.src = '../assets/img/academik/generatedAcademik.PNG';
    }else if(id == '5'){
        img.src = '../assets/img/academik/certificate.PNG';
    }
}

function modalViewOracle(id){
    if (id == '1'){
        img2.src= '../assets/img/oracle/controles.PNG';
    }else if(id == '2'){
        img2.src = '../assets/img/oracle/campos.PNG';
    }else if(id =='3'){
        img2.src = '../assets/img/oracle/director.PNG';
    }else if(id == '4'){
        img2.src = '../assets/img/oracle/firma.PNG';
    }else if(id == '5'){
        img2.src = '../assets/img/oracle/registro.PNG';
    }else if(id == '6'){
        img2.src = '../assets/img/oracle/generate.PNG';
    }else if( id == '7'){
        img2.src = '../assets/img/oracle/certificate.PNG'
    }else if(id == '8'){
        img2.src = '../assets/img/oracle/without.PNG';
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