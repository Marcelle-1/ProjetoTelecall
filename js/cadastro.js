$('#form-cadastro').submit(function(){
    var sexo = $('#validationServer03')
    var invalido = $('.invalid-feedback')
    var valido = $('.valid-feedback')
    var nome = $('#name')
    var endereco = $('#validationServer03')
    

    if (nome.val() == "") {
        invalido.removeClass('is-invalid')
        return false
    } else {
        valido.removeClass('is-valid')
        return false
    }

    
    if (sexo.val() == '1' | '2' | '3') {
        invalido.removeClass('is-invalid')
        return false
    }


    if (endereco.val() == "") {
        invalido.removeClass('is-invalid')
        return false
    } else {
        endereco.removeClass('is-valid')
        return false
    }


    return false
})