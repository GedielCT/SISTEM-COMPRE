import baseDados from "../baseDados.js";

const crud = {
    readComissao() {
        baseDados.dados.funcionario.forEach(({id, nome, cpf}) => {
            crud.creatComissao({id, nome: nome, cpf: cpf});
        })
    },
    creatComissao(dados) {

        const $listaComissao = document.querySelector('.listaComissao');
        $listaComissao.insertAdjacentHTML('afterbegin', `
            <tbody>
                <tr>
                    <td>${dados.nome}</td>
                    <td>${dados.id || idInterno}</td>
                    <td>${dados.cpf}</td>
                    <td>${dados.produtoVendido}</td>
                    <td>${dados.quantidadeVendida}</td>
                    <td>${dados.lucroTotal}</td>
                </tr>
            </tbody>
        `)
    }
}

// Aguarda o DOM estar pronto antes de executar
document.addEventListener('DOMContentLoaded', () => {
    crud.readComissao();
    console.log(baseDados.dados.funcionario)
});