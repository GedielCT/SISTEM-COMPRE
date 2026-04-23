import baseDados from "../baseDados.js"

const crud = {
    creatCliente(dados, htmlOnly = false) {
        const idInterno = Date.now()
        if(!htmlOnly) {
            baseDados.dados.cliente.push({
                id: dados.id || idInterno,
                nome: dados.nome,
                email: dados.email,
                telefone1: dados.telefone1,
                telefone2: dados.telefone2,
                dataNascimento: dados.dataNascimento,
                endereco: dados.endereco,
                cidade: dados.cidade,
                estado: dados.estado,
                cep: dados.cep,
                cpf: dados.cpf,
                observacoes: dados.observacoes
            });
            
            // Salvar dados no localStorage após adicionar novo cliente
            baseDados.salvarDados(baseDados.dados);
        }
    }
}

const $meuForm = document.querySelector('form[name="formulario"]')
console.log($meuForm)

$meuForm.addEventListener('submit', function creatCliente(infosDoEvento) {
    infosDoEvento.preventDefault();
    console.log('novo cliente');

    const $campoNome = document.querySelector('input[name="campoNome"]');
    const $campoTelefone1 = document.querySelector('input[name="campoTelefone1"]');
    const $campoTelefone2 = document.querySelector('input[name="campoTelefone2"]');
    const $campoEmail = document.querySelector('input[name="campoEmail"]');
    const $campoEndereco = document.querySelector('input[name="campoEndereco"]');
    const $campoDataNascimento = document.querySelector('input[name="campoDataNascimento"]');
    const $campoCidade = document.querySelector('input[name="campoCidade"]');
    const $campoEstado = document.querySelector('input[name="campoEstado"]');
    const $campoCep = document.querySelector('input[name="campoCep"]');
    const $campoCpf = document.querySelector('input[name="campoCpf"]');
//    const $campoObservacoes = document.querySelector('input[name="campoObservacoes"]');

    crud.creatCliente({nome: $campoNome.value, telefone1: $campoTelefone1.value, telefone2: $campoTelefone2.value,
        email: $campoEmail.value, endereco: $campoEndereco.value, dataNascimento: $campoDataNascimento.value, 
        cidade: $campoCidade.value, estado: $campoEstado.value, cep: $campoCep.value, cpf: $campoCpf.value,
        observacoes: "teste"
    });

    $campoNome.value = '';
    $campoTelefone1.value = '';
    $campoTelefone2.value = '';
    $campoEmail.value = '';
    $campoEndereco.value = '';
    $campoDataNascimento.value = '';
    $campoCidade.value = '';
    $campoEstado.value = '';
    $campoCep.value = '';
    $campoCpf.value = '';
//    $campoObservacoes.value = '';

    console.log(baseDados.dados.cliente);
    
    // Mostrar mensagem de sucesso
    alert('Cliente cadastrado com sucesso!');
    
    // Limpar formulário
    $meuForm.reset();
})