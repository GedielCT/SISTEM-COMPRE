import baseDados from "../baseDados.js";

const crud = {
    readVendido() {
        baseDados.dados.produto.forEach(({id, codigo, nomeProduto, marcaProduto, quantidade, valorUnitario}) => {
            crud.creatVendido({id, codigo: codigo, nomeProduto: nomeProduto, marcaProduto: marcaProduto, quantidade: quantidade, valorUnitario: valorUnitario});
        })
    },
    creatVendido(dados) {

        const $listaVendas = document.querySelector('.listaVendas');
        $listaVendas.insertAdjacentHTML('afterbegin', `
            <tbody>
                <tr>
                    <td>${dados.nomeProduto}</td>
                    <td>${dados.codigo}</td>
                    <td>${dados.marcaProduto}</td>
                    <td>${dados.quantidade}</td>
                    <td>${dados.vendido}</td>
                    <td>R$ ${parseFloat(dados.lucro).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                </tr>
            </tbody>
        `)
    }
}

// Aguarda o DOM estar pronto antes de executar
document.addEventListener('DOMContentLoaded', () => {
    crud.readVendido();
    console.log(baseDados.dados.produto)
});