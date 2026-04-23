import baseDados from "../baseDados.js";

const crud = {
    readFuncionario() {
        baseDados.dados.funcionario.forEach(({id, nome, email, telefone1, telefone2, dataNascimento, dataAdmissao, endereco, cidade, estado, cep, cpf, observacoes}) => {
            crud.creatFuncionario({id, nome: nome, email: email, telefone1: telefone1, telefone2: telefone2, dataNascimento: dataNascimento, dataAdmissao: dataAdmissao, endereco: endereco, cidade: cidade, estado: estado, cep: cep, cpf: cpf, observacoes: observacoes});
        });
    },
    creatFuncionario(dados) {
        const $listaFuncionario = document.querySelector('.listaFuncionario');
        $listaFuncionario.insertAdjacentHTML('afterbegin', `
            <tbody>
                <tr>
                    <td>${dados.id || idInterno}</td>
                    <td>${dados.nome}</td>
                    <td>${dados.cpf}</td>
                    <td>${dados.dataNascimento}</td>
                    <td>${dados.dataAdmissao}</td>
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

document.addEventListener('DOMContentLoaded', () => {
    crud.readFuncionario();
    console.log(baseDados.dados.funcionario)
});