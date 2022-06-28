
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




function enviar(){
    var mensagem1 = document.forms["mensagem-form"]["mensagem1"];
    if(mensagem1.value==""){
      mensagem1.classList.add("erro");
      mensagem1.innerHTML = "Preencha a mensagem";
      return false;
    }else{
      mensagem1.classList.remove("erro");
      mensagem1.classList.add("sucesso");
    }
    
    return true;
}



