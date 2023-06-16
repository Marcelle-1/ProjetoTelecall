var senha = document.getElementById("validationPassword");
var confirmaSenha = document.getElementById("validationConfirmPassword");
var feedback = document.getElementById("validationServer11Feedback");
var feedbackBom = document.getElementById("validationServer111Feedback");

function senhasIguais() {
    if (senha.value != confirmaSenha.value) {
        feedback.classList.add("is-invalid");
    } else {
        feedbackBom.classList.add("is-valid");
    };
};

senha.onchange = senhasIguais;
confirmaSenha.onkeyup = senhasIguais;