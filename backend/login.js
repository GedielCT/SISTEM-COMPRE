import baseDados from './baseDados.js';

const entrarBtn = document.getElementById('entrar');
const usuarioInput = document.querySelector('.inputs input[name="usuario"]');
const senhaInput = document.querySelector('.inputs input[name="senha"]');

if (!entrarBtn || !usuarioInput || !senhaInput) {
    console.warn('Elementos de login não encontrados. Verifique o HTML.');
} else {
    function limparEntrada() {
        usuarioInput.value = '';
        senhaInput.value = '';
        usuarioInput.focus();
    }

    entrarBtn.addEventListener('click', (e) => {
        const usuario = usuarioInput.value.trim();
        const senha = senhaInput.value.trim();

        if (!usuario || !senha) {
            alert('Por favor, preencha todos os campos de login.');
            return;
        }

        const usuarios = (baseDados && baseDados.dados && baseDados.dados.usuario) ? baseDados.dados.usuario : [];

        console.log('Tentativa de login — entrada e estado atual:');
        console.log('  usuarioEntrada:', JSON.stringify(usuario));
        console.log('  senhaEntrada:', JSON.stringify(senha).replace(/./g, '*'));
        console.log('  usuariosDisponiveis (completo):', usuarios);

        const normalize = s => String(s || '').trim().toLowerCase();
        const match = usuarios.find(u => normalize(u.nomeUsuario) === normalize(usuario) && String(u.senhaUsuario) === senha);

        if (match) {
            try {
                localStorage.setItem('sistemaCompre_usuarioAtual', JSON.stringify({ id: match.id, nomeUsuario: match.nomeUsuario }));
            } catch (err) {
                console.warn('Não foi possível salvar usuário atual no localStorage.', err);
            }
            window.location.href = 'home.html';
        } else {
            console.warn('Falha no login - credenciais não bateram.');
            alert('Usuário ou senha incorretos. Tente novamente.');
            limparEntrada();
        }
    });
}