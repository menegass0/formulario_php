const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //prevents form from submitting
    statusTxt.style.display= "block";
    statusTxt.style.color = "#0D6EFD"
    //AJAX
    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true);//sending post request to message.php
    xhr.onload = ()=>{//once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){//caso o ready state seja igual a 4 e o status de resposta for 200 significa que nao há erros
            let response = xhr.response;//guardando a resposta do ajax em uma variavel
            if(response.indexOf("Email and password fields are required") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message") != -1){
                statusTxt.style.color = "red";
            }
            else{
                form.reset;
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);//esconde o statusTxt depois de 3 segundos que a mensagem foi enviada
            }
            statusTxt.innerText = response;
        }
    
    }
    let formData = new FormData(form); //creating a new FormData obj 
    xhr.send(formData);
}