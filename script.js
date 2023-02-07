const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //prevents form from submitting
    statusTxt.style.display= "block";
    //AJAX
    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true);//sending post request to message.php
    xhr.onload = ()=>{//once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){//caso o ready state seja igual a 4 e o status de resposta for 200 significa que nao há erros
            let response = xhr.response;//guardando a resposta do ajax em uma variavel
            console.log(response);
        }
    
    }
    let formData = new FormData(form); //creating a new FormData obj 
    xhr.send(FormData);
}