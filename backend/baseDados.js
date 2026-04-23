// Função para carregar dados do localStorage
function carregarDados() {
    const dadosSalvos = localStorage.getItem('sistemaCompre_dados');
    // Dados padrão se não houver dados salvos
    const padrao = {
        cliente: [
            {
                id: Date.now(),
                nome: 'Gediel Cassemiro Teixeira',
                email: 'gedielcassemiro@gmail.com',
                telefone1: '48 998271947',
                telefone2: '48 999999999',
                dataNascimento: '22/01/2004',
                endereco: 'Rua Tranquilo Pelegrin, 598, Maria Ceu',
                cidade: 'criciúma',
                estado: 'Santa Catarina',
                cep: '88800 123',
                cpf: '11456852930',
                observacoes: 'nada a adicionar.'
            }
        ],
        funcionario: [
            {
                id: Date.now(),
                nome: 'Fernanda Masera Torres',
                email: 'nandatorres@gmail.com',
                telefone1: '48 981612456',
                telefone2: '48 999988888',
                dataNascimento: '16/02/2004',
                endereço: 'Rua Tranquilo Pelegrim, 598, Maria Ceu',
                cidade: 'Criciuma',
                estado: 'Santa Catarina',
                cep: '88800 132',
                cpf: '45678912345',
                observacoes: ''
            }
        ],
        produto: [
            {
                id: Date.now(),
                codigo: '78945613546',
                nomeProduto: 'Arroz branco',
                quantidade: '123 un',
                marcaProduto: 'Fortbem'
            }
        ],
        usuario: [
            {
                id: Date.now(),
                nomeUsuario: 'admin',
                senhaUsuario: 'admin123'
            },
            {
                id: Date.now(),
                nomeUsuario: 'funcionario1',
                senhaUsuario: 'func123'
            }
        ]
    };

    if (dadosSalvos) {
        try {
            const parsed = JSON.parse(dadosSalvos);
            // Garantir que todas as chaves esperadas existam; se alguma faltar, usar o padrão
            const merged = Object.assign({}, padrao);
            for (const key of Object.keys(padrao)) {
                if (parsed[key] !== undefined && parsed[key] !== null) {
                    merged[key] = parsed[key];
                }
            }
            return merged;
        } catch (err) {
            console.warn('Erro ao parsear dados salvos, usando dados padrão.', err);
            return padrao;
        }
    }

    return padrao;
}

// Função para salvar dados no localStorage
function salvarDados(dados) {
    localStorage.setItem('sistemaCompre_dados', JSON.stringify(dados));
}

const dados = carregarDados();

export default {dados, salvarDados}