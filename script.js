const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //prevents form from submitting
    statusTxt.style.display= "block";
    //AJAX
    let xhr = new XMLHttpsRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = ()=>{

    }
    xhr.send
}