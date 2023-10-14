function limparcampos() {
    const nome=document.querySelector('#nome') ;
    nome.value='';
    const dataNasc=document.querySelector('#dataNasc') ;
    dataNasc.value='';
    const nomem=document.querySelector('#nomem') ;
    nomem.value='';
    const cpf=document.querySelector('#cpf') ;
    cpf.value='';
    const endereco=document.querySelector('#endereco') ;
    endereco.value='';
    const telefonec=document.querySelector('#telefonec') ;
    telefonec.value='';
    const telefone=document.querySelector('#telefone') ;
    telefone.value='';
    const senha=document.querySelector('#senha') ;
    senha.value='';
    const csenha=document.querySelector('#csenha') ;
    csenha.value='';

    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0, l = inputs.length; i < l; i++){
    inputs[i].checked = false;
}

}