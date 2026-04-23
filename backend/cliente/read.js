import baseDados from "../baseDados.js";

const crud = {
    readCliente() {
        baseDados.dados.cliente.forEach(({id, nome, email, telefone1, telefone2, dataNascimento, endereco, cidade, estado, cep, cpf, observacoes}) => {
            crud.creatCliente({id, nome: nome, email: email, telefone1: telefone1, telefone2: telefone2, dataNascimento: dataNascimento, endereco: endereco, cidade: cidade, estado: estado, cep: cep, cpf: cpf, observacoes: observacoes});
        })
    },
    creatCliente(dados) {

        const $listaCliente = document.querySelector('.listaClientes');
        $listaCliente.insertAdjacentHTML('afterbegin', `
            <tbody>
                <tr>
                    <td>${dados.nome}</td>
                    <td>${dados.id || idInterno}</td>
                    <td>${dados.dataNascimento}</td>
                    <td>${dados.cpf}</td>
                    <td>${dados.telefone1}</td>
                    <td>${dados.email}</td>
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
    crud.readCliente();
    console.log(baseDados.dados.cliente)
});