const hamburger = document.querySelector('.menu');
const menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () =>{
    menu.classList.toggle('show');
});


function validatePhone(phone) {
    return (/^\d{10}$/.test(phone));
}
function validateEmail(mail) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return(emailRegex.test(mail));
}
function toggleButton() {
    const name = document.getElementById('nombre').value.trim();
    const email = document.getElementById('correo').value;
    const phone = document.getElementById('telefono').value;
    if (name && validateEmail(email) && validatePhone(phone)) {
        document.getElementById('btn_send').disabled = false;
    } else {
        document.getElementById('btn_send').disabled = true;
    }
}