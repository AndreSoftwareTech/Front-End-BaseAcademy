

var elemento = document.querySelector('h1');
console.log(elemento);

function limpar(event){
    
    event.preventDefault();
    console.log('Limpando formulario...')
    document.querySelector('form').reset();
}

function salvar(event){
    event.preventDefault();
    console.log('salvando...');
    var Nome = document.getElementsByName('nome')[0].value;
    var SobreNome = document.getElementsByName('sobrenome')[0].value;
    var CPF = document.getElementsByName('cpf')[0].value;
    var Email = document.getElementsByName('email')[0].value;
    var Alunos = {
                    'nome':Nome,
                    'sobrenome':SobreNome,
                    'cpf':CPF,
                    'email':Email
                }
    console.log(Alunos);

    localStorage.setItem('Aluno', JSON.stringify(Alunos));
}

document.getElementById('SALVAR').addEventListener('click', salvar);


