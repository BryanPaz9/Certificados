document.addEventListener("keydown",movimiento);
var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');
var x= random(0,5)*80;
var y = random(0,5)*80;
const DIMENSION = 80;
randomC = random(1,6);
randomV = random(1,6);
randomSano = random(1,3);
var matriz = new Array(6);  
var fondo = {
    url: './imagenes/tile.png',
    imagen: Image,    
    cargaOk: false
};

var vaca ={
    url: './imagenes/vaca.png',
    imagen: Image,
    cargaOk: false
};

var cerdo = {
    url: './imagenes/cerdo.png',
    imagen: Image, 
    cargaOk: false
};

var cuchillo = {
    url: './imagenes/Cuchillo.png',
    imagen: Image,
    cargaOk: false

};

fondo.imagen = new Image();
vaca.imagen = new Image();  
cerdo.imagen = new Image();
cuchillo.imagen = new Image();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
cuchillo.imagen.src = cuchillo.url;

fondo.imagen.addEventListener("load",function(){
    fondo.cargaOk = true;
    dibujar();
});
vaca.imagen.addEventListener("load",function(){
    vaca.cargaOk = true;
     dibujar();
});
cerdo.imagen.addEventListener("load",function(){
    cerdo.cargaOk = true;
     dibujar();
});
cuchillo.imagen.addEventListener("load",function(){
    cuchillo.cargaOk = true;
    dibujar();
});
iniciarMatriz();
inicializarCerdo();
inicializarVacas();
dibujar();
var tecla ={
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13

}

function dibujar(){
    if(fondo.cargaOk){
        lapiz.drawImage(fondo.imagen,0,0);
    }

    dibujarMatriz();
     if(cuchillo.cargaOk){
        lapiz.drawImage(cuchillo.imagen,x,y);
    }
    
}
function movimiento(evento){
    
    switch(evento.keyCode){
        case tecla.LEFT:
            if(x!=0){
            x-= DIMENSION;
            dibujar();
            }
            break;
        case tecla.UP:
        if(y !=0){
            y-= DIMENSION;
            dibujar();
        }
            break;
        case tecla.RIGHT:
        if (x !=400){
            x+= DIMENSION;
            dibujar();
        }
            break;
        case tecla.DOWN:
        if(y !=400){
            y+= DIMENSION;
            dibujar();
        }
            break;
        case tecla.ENTER:   
        animales();
        console.log(matriz);
        }
     }

function random(minimo, maximo){
    return Math.floor(Math.random()*(maximo -minimo+1 ))+minimo;

}

function iniciarMatriz(){
    for (var i = 0; i <matriz.length; i++){
        matriz[i] = new Array(6);
        for(var j = 0; j<matriz.length; j++){
            matriz[i][j]= 'x';
        }
    }
}

function inicializarVacas(){
    var numero = random(0,5);
    var sana = random(0,numero);
    var cont = 0;
    for(var i = 0; i<= numero;i++){
        var fila = random(0,5);
        var columna = random(0,5);
        if(matriz[fila][columna] == 'x'){
            matriz[fila][columna] ='v'+cont;
            cont++;
        }
        if(matriz[fila][columna]== 'v'+sana){
            matriz[fila][columna]= 'vaca sana';
        }
    }
}

function inicializarCerdo(){
    var numero = random(0,5);
    var sano = random(0,numero);
    var cont =0;
    for(var i = 0; i<= numero; i++){
        var fila = random(0,5);
        var columna = random(0,5);
        if(matriz[fila][columna]== 'x'){
            matriz[fila][columna] = 'c'+cont;
            cont++;  
        }
        if(matriz[fila][columna]== 'c'+sano){
            matriz[fila][columna] = 'cerdo sano';
        }
    }
}
function dibujarMatriz(){
    for(var i = 0; i<matriz.length; i++){
        for(var j =0; j<matriz.length;j++){
            if(matriz[i][j]=='v0'||matriz[i][j]=='v1'||matriz[i][j]=='v2'||matriz[i][j]=='v3'||matriz[i][j]=='v4'||matriz[i][j]=='v5'||matriz[i][j]=='vaca sana'){
                lapiz.drawImage(vaca.imagen ,i*DIMENSION, j*DIMENSION);
            }else if(matriz[i][j]=='c0'||matriz[i][j]=='c1'||matriz[i][j]=='c2'||matriz[i][j]=='c3'||matriz[i][j]=='c4'||matriz[i][j]=='c5'||matriz[i][j]=='cerdo sano'){
                lapiz.drawImage(cerdo.imagen,i*DIMENSION,j*DIMENSION);
            }
        }
    }
}
function animales(){
    var cont = 0;
    var animal = 'x';
    for(var i =0; i<matriz.length; i++){
        for(var j = 0; j<matriz.length;j++){
            if(matriz[(x/DIMENSION)][(y/DIMENSION)]== 'v0'||matriz[(x/DIMENSION)][(y/DIMENSION)]== 'v1'||matriz[(x/DIMENSION)][(y/DIMENSION)]== 'v2'||matriz[(x/DIMENSION)][(y/DIMENSION)]== 'v3'|| matriz[(x/DIMENSION)][(y/DIMENSION)]== 'v4'||[(x/DIMENSION)][(y/DIMENSION)]== 'v5'){
                animal = 'vaca';
            }else if(matriz[(x/DIMENSION)][(y/DIMENSION)]== 'c0'||matriz[(x/DIMENSION)][(y/DIMENSION)]== 'c1'|matriz[(x/DIMENSION)][(y/DIMENSION)]== 'c2'||matriz[(x/DIMENSION)][(y/DIMENSION)]== 'c3'||matriz[(x/DIMENSION)][(y/DIMENSION)]== 'c4'||matriz[(x/DIMENSION)][(y/DIMENSION)]== 'c5'){
                animal = 'cerdo malo >:v';
            }
            else if(matriz[x/DIMENSION][y/DIMENSION]=='cerdo sano'){
                animal = 'cerdo sano :D';
            }else if(matriz[x/DIMENSION][y/DIMENSION]== 'vaca sana'){
                animal = 'vaca sana';
        }else{
                animal = 'no hay animal xd, solo pasto';
            }
        }
    }
    return alert(animal);
}
function sanos(){
    var sano = inicializarCerdo();
    alert(sano);
}