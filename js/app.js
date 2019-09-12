'use strict'
var id;
var img = document.getElementById('img1');

function modalView(id){
    if (id == '1'){
        console.log('1');
        img.src= '../assets/img/academik/campos obligatorios.PNG';
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