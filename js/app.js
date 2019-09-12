'use strict'
var id;
var img = document.getElementById('img1');

function modalView(id){
    if (id == '1'){
        console.log('1');
        img.src= '../assets/img/oracle/campos obligatorios.PNG';
    }else if(id == '2'){
        console.log('2');
        img.src = '../assets/img/academik/campos vacios.PNG';
    }else if(id =='3'){
        console.log('3');
        img.src = '../assets/img/academik/registro.PNG'
    }else if(id == '4'){
        console.log('4');
        img.src = '../assets/img/academik/generatedAcademik.PNG'
    }else if(id == '5'){
        img.src = '../assets/img/academik/certificate.PNG';
    }
}

function modalViewOracle(id){
    if (id == '1'){
        console.log('1');
        img.src= '../assets/img/oracle/controles.PNG';
    }else if(id == '2'){
        console.log('2');
        img.src = '../assets/img/oracle/campos.PNG';
    }else if(id =='3'){
        console.log('3');
        img.src = '../assets/img/oracle/director.PNG'
    }else if(id == '4'){
        console.log('4');
        img.src = '../assets/img/oracle/firma.PNG'
    }else if(id == '5'){
        img.src = '../assets/img/oracle/registro.PNG';
    }else if(id == '6'){
        img.src = '../assets/img/oracle/generate.PNG'
    }else if( id == '7'){
        img.src = '../assets/img/oracle/certificate.PNG'
    }else if(id == '8'){
        img.src = '../assets/img/oracle/without.PNG'
    }
}