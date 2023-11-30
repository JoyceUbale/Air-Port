
const button1 = document.getElementById("In");

button1.onclick = () =>{
    const contactform = document.getElementById("contactform");
    contactform.classList.add("show");
}
const button2 = document.getElementById("cross");

button2.onclick = () =>{
    const contactform = document.getElementById("contactform");
    contactform.classList.remove("show");
}
const button3 = document.getElementById("submit");

button3.onclick = () =>{
    const contactform = document.getElementById("contactform");
    contactform.classList.remove("show");
}