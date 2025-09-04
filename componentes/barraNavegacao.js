class BarraNavegacao extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../../css/barraNavegacao.css">    

            <nav>
                <div class="esquerda">
                    <button class="buttonCadastrar" id="buttonCadastrar">Cadastrar</button>
                    <div class="dropdownCadastrar" id="dropdownCadastrar">
                        <a href="/pages/cadastrar/cliente.html" class="botoes">Cliente</a>
                        <a href="/pages/cadastrar/funcionario.html" class="botoes">Funcionário</a>
                        <a href="/pages/cadastrar/produto.html" class="botoes">Produto</a>
                    </div>                    

                    <button class="buttonFinanceiro" id="buttonFinanceiro">Financeiro</button>
                    <div class="dropdownFinanceiro" id="dropdownFinanceiro">
                        <a href="/pages/financeiro/venda.html" class="botoes">Venda</a>
                    </div>

                    <button class="buttonConsultas" id="buttonConsultas">Consultas</button>
                    <div class="dropdownConsultas" id="dropdownConsultas">
                        <a href="/pages/consultas/cliente.html" class="botoes">Cliente</a>
                        <a href="/pages/consultas/funcionario.html" class="botoes">Funcionário</a>
                        <a href="/pages/consultas/produto.html" class="botoes">Produto</a>
                    </div>

                    <button class="buttonRelatorios" id="buttonRelatorios">Relatórios</button>
                    <div class="dropdownRelatorios" id="dropdownRelatorios">
                        <a href="/pages/relatorios/vendas.html" class="botoes">Vendas</a>
                        <a href="/pages/relatorios/comissao.html" class="botoes">Comissão</a>
                    </div> 

                    <button class="buttonAjuda" id="buttonAjuda">Ajuda</button>
                    <div class="dropdownAjuda" id="dropdownAjuda">
                        <a href="/pages/ajuda/suporte.html" class="botoes">Suporte</a>
                        <a href="/pages/ajuda/manual.html" class="botoes">Manual</a>
                    </div>                    
                </div>
                <div class="direita">
                    <p>Conectado como: Vendedor Thiago</p>
                    <button class="buttonPerfil" id="buttonPerfil"><img src="../../img/usuario.png"></button>
                    <div class="dropdownPerfil" id="dropdownPerfil">
                        <a href="/pages/perfil/alterarSenha.html?from=../../home.html" class="botoes">Alterar Senha</a>
                        <a href="/index.html" class="botoes">Sair</a>
                    </div>
                </div>
            </nav>
        `;

        const buttonPerfil = this.shadowRoot.querySelector("#buttonPerfil");
        const dropdownPerfil = this.shadowRoot.querySelector("#dropdownPerfil");

        const buttonAjuda = this.shadowRoot.querySelector("#buttonAjuda");
        const dropdownAjuda = this.shadowRoot.querySelector("#dropdownAjuda");

        const buttonRelatorios = this.shadowRoot.querySelector("#buttonRelatorios");
        const dropdownRelatorios = this.shadowRoot.querySelector("#dropdownRelatorios");

        const buttonConsultas = this.shadowRoot.querySelector("#buttonConsultas");
        const dropdownConsultas = this.shadowRoot.querySelector("#dropdownConsultas");

        const buttonFinanceiro = this.shadowRoot.querySelector("#buttonFinanceiro");
        const dropdownFinanceiro = this.shadowRoot.querySelector("#dropdownFinanceiro");

        const buttonCadastrar = this.shadowRoot.querySelector("#buttonCadastrar");
        const dropdownCadastrar = this.shadowRoot.querySelector("#dropdownCadastrar");

        if (dropdownPerfil) {
            buttonPerfil.addEventListener("click", () => {
                dropdownPerfil.classList.toggle("show");

                dropdownAjuda.classList.remove("show");
                dropdownRelatorios.classList.remove("show");
                dropdownConsultas.classList.remove("show");
                dropdownFinanceiro.classList.remove("show");
                dropdownCadastrar.classList.remove("show");
            });
        }

        if (dropdownAjuda) {
            buttonAjuda.addEventListener("click", () => {
                dropdownAjuda.classList.toggle("show");
                
                dropdownPerfil.classList.remove("show");
                dropdownRelatorios.classList.remove("show");
                dropdownConsultas.classList.remove("show");
                dropdownFinanceiro.classList.remove("show");
                dropdownCadastrar.classList.remove("show");
            });
        }

        if (dropdownRelatorios) {
            buttonRelatorios.addEventListener("click", () => {
                dropdownRelatorios.classList.toggle("show");

                dropdownAjuda.classList.remove("show");
                dropdownPerfil.classList.remove("show");
                dropdownConsultas.classList.remove("show");
                dropdownFinanceiro.classList.remove("show");
                dropdownCadastrar.classList.remove("show");
            });
        }

        if (dropdownConsultas) {
            buttonConsultas.addEventListener("click", () => {
                dropdownConsultas.classList.toggle("show");

                dropdownAjuda.classList.remove("show");
                dropdownRelatorios.classList.remove("show");
                dropdownPerfil.classList.remove("show");
                dropdownFinanceiro.classList.remove("show");
                dropdownCadastrar.classList.remove("show");
            });
        }

        if (dropdownFinanceiro) {
            buttonFinanceiro.addEventListener("click", () => {
                dropdownFinanceiro.classList.toggle("show");

                dropdownAjuda.classList.remove("show");
                dropdownRelatorios.classList.remove("show");
                dropdownPerfil.classList.remove("show");
                dropdownConsultas.classList.remove("show");
                dropdownCadastrar.classList.remove("show");
            });
        }

        if (dropdownCadastrar) {
            buttonCadastrar.addEventListener("click", () => {
                dropdownCadastrar.classList.toggle("show");

                dropdownAjuda.classList.remove("show");
                dropdownRelatorios.classList.remove("show");
                dropdownPerfil.classList.remove("show");
                dropdownConsultas.classList.remove("show");
                dropdownFinanceiro.classList.remove("show");
            });
        }

        window.addEventListener("click", this.handleOutsideClick.bind(this));
    }

    handleOutsideClick(e) {
        // Se o clique não foi dentro do shadowRoot
        if (
            !e.composedPath().includes(this.shadowRoot.querySelector("#buttonPerfil")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#dropdownPerfil")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#buttonAjuda")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#dropdownAjuda")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#buttonRelatorios")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#dropdownRelatorios")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#buttonConsultas")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#dropdownConsultas")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#buttonFinanceiro")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#dropdownFinanceiro")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#buttonCadastrar")) &&
            !e.composedPath().includes(this.shadowRoot.querySelector("#dropdownCadastrar"))) {

            // Fecha ambos os menus
            this.shadowRoot.querySelector("#dropdownPerfil").classList.remove('show');
            this.shadowRoot.querySelector("#dropdownAjuda").classList.remove('show');
            this.shadowRoot.querySelector("#dropdownRelatorios").classList.remove('show');
            this.shadowRoot.querySelector("#dropdownConsultas").classList.remove('show');
            this.shadowRoot.querySelector("#dropdownFinanceiro").classList.remove('show');
            this.shadowRoot.querySelector("#dropdownCadastrar").classList.remove('show');
        }
    }

}

customElements.define("barra-navegacao", BarraNavegacao);