import baseDados from "../baseDados.js"

const crud = {
    creatProduto(dados, htmlOnly = false) {
        const idInterno = Date.now()
        if(!htmlOnly) {
            baseDados.dados.produto.push({
                id: dados.id || idInterno,
                codigo: dados.codigo,
                nomeProduto: dados.nomeProduto,
                quantidade: dados.quantidade,
                marcaProduto: dados.marcaProduto,
                valorUnitario: dados.valorUnitario,
            });
            
            // Salvar dados no localStorage após adicionar novo cliente
            baseDados.salvarDados(baseDados.dados);
        }
    }
}

const $meuForm = document.querySelector('form[name="formulario"]')
console.log($meuForm)

$meuForm.addEventListener('submit', function creatProduto(infosDoEvento) {
    infosDoEvento.preventDefault();
    console.log('novo produto');

    const $campoCodigo = document.querySelector('input[name="campoCodigo"]');
    const $campoNomeProduto = document.querySelector('input[name="campoNomeProduto"]');
    const $campoMarcaProduto = document.querySelector('input[name="campoMarcaProduto"]');
    const $campoQuantidade = document.querySelector('input[name="campoQuantidade"]');
    const $campoValorUnitario = document.querySelector('input[name="campoValorUnitario"]');

    crud.creatProduto({
        codigo: $campoCodigo.value,
        nomeProduto: $campoNomeProduto.value,
        quantidade: $campoQuantidade.value,
        marcaProduto: $campoMarcaProduto.value,
        valorUnitario: $campoValorUnitario.value
    });

    $campoCodigo.value = '';
    $campoNomeProduto.value = '';
    $campoQuantidade.value = '';
    $campoMarcaProduto.value = '';
    $campoValorUnitario.value = '';

    console.log(baseDados.dados.produto);
    
    // Mostrar mensagem de sucesso
    alert('Produto cadastrado com sucesso!');

    // Limpar formulário
    $meuForm.reset();
})