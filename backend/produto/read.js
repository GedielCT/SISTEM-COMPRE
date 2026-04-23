import baseDados from "../baseDados.js";

const crud = {
    readProduto() {
        baseDados.dados.produto.forEach(({id, codigo, nomeProduto, marcaProduto, quantidade, valorUnitario}) => {
            crud.creatProduto({id, codigo: codigo, nomeProduto: nomeProduto, marcaProduto: marcaProduto, quantidade: quantidade, valorUnitario: valorUnitario});
        })
    },
    creatProduto(dados) {

        const $listaProduto = document.querySelector('.listaProdutos');
        $listaProduto.insertAdjacentHTML('afterbegin', `
            <tbody>
                <tr>
                    <td>${dados.codigo}</td>
                    <td>${dados.nomeProduto}</td>
                    <td>${dados.marcaProduto}</td>
                    <td></td>
                    <td>${dados.quantidade}</td>
                    <td>R$ ${parseFloat(dados.valorUnitario).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                    <td>
                        <button class="editar"><img src="../../img/editar.png" alt="Editar"></button>
                        <button class="excluir"><img src="../../img/excluir.png" alt="Excluir"></button>
                    </td>
                </tr>
            </tbody>
        `)
    }
}

// Aguarda o DOM estar pronto antes de executar
document.addEventListener('DOMContentLoaded', () => {
    crud.readProduto();
    console.log(baseDados.dados.produto)
});