
const imagensCarrossel = document.getElementById("imagens");
const imagemUnicaCarrossel = document.querySelectorAll("#imagens img");


let idx = 0; 

function carrossel(){
    idx++; 

    if(idx > imagemUnicaCarrossel.length - 1){
        idx = 0;
    }

    imagensCarrossel.style.transform = `translateX(${-idx * 755}px)`; 
}

setInterval(carrossel, 2800);


