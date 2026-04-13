import './App.css';

function App() {
  return (
    <div className="main">
      
      {/* Navbar */}
      <nav id="gridMenu" className="navbar">
        <h2 id="nomeMenu">Henrique | Dev</h2>
        
        <div className="menu">
          <a href="#sobre" className="botaoMenu">Sobre Mim</a>
          <a href="#formacao" className="botaoMenu">Formação</a>
          <a href="#projetos" className="botaoMenu">Projetos</a>
          <a href="#habilidades" className="botaoMenu">Habilidades</a>
          <a href="#certificados" className="botaoMenu">Certificados</a>
          <a href="#contato" className="botaoMenu">Contato</a>
        </div>

        <a 
          href="/curriculo/Henrique_Possebon_Barbosa.pdf" 
          target="_blank" 
          className="botaoDownload"
        >
          Baixar CV
        </a>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="secao">
        <div className="hero-content">
          <h1 className="titulo">Olá, eu sou <span className="highlight">HENRIQUE POSSEBON</span></h1>
          <h2 className="subtitulohome">Estudante de Engenharia da Computação • Desenvolvedor Front-End</h2>
          <p className="paragrafohome">
            Transformo ideias em interfaces modernas, responsivas e funcionais 
            utilizando React, JavaScript, HTML e CSS.
          </p>
          
          <div className="cta-buttons">
            <a href="#projetos" className="btn-primary">Ver meus projetos</a>
            <a href="#contato" className="btn-secondary">Falar comigo</a>
          </div>
        </div>
        <div id="fotoPerfil"></div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="secao">
        <h2 className="subtitulo">Sobre Mim</h2>
        <div className="section-content">
        <p className="paragrafo">
          Estudante do 9º semestre de <strong>Engenharia da Computação</strong> na Anhanguera Educacional, 
          com conclusão prevista para dezembro de 2026. Sou apaixonado por desenvolvimento front-end e 
          tenho experiência prática na criação de interfaces modernas e responsivas.
        </p>
        <p className="paragrafo">
          Trabalho com <strong>React</strong>, JavaScript, HTML5, CSS3 e integração com APIs. 
          Busco minha primeira oportunidade de <strong>estágio em front-end</strong>, onde possa 
          contribuir com código limpo, aprender boas práticas e evoluir rapidamente para o desenvolvimento full-stack.
        </p>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section id="formacao" className="secao">
        <h2>Formação</h2>
        <div className="section-content">
          <div className="formacao-card">
            <h3>Bacharelado em Engenharia da Computação</h3>
            <p>Anhanguera Educacional – Guarulhos/SP</p>
            <p>9º semestre • Conclusão prevista: Dezembro de 2026</p>
          </div>
        </div>
      </section>

      {/* PROJETOS - Você vai preencher depois */}
      <section id="projetos" className="secao">
        <h2>Projetos em Destaque</h2>
        <p className="section-description">
          Aqui ficarão meus principais projetos. Por enquanto estou atualizando esta seção.
        </p>
        {/* Cards de projetos serão adicionados aqui */}
      </section>

      {/* HABILIDADES */}
<section id="habilidades" className="secao">
  <h2>Habilidades Técnicas</h2>
  
  <div className="skills-grid">
    <>
      {/* Card 1 - Front-end */}
      <div className="card">
        <div className="card__content">
          <h4>Front-end</h4>
            <p>• HTML5</p>
            <p>• CSS3</p> 
            <p>• JavaScript (ES6+)</p>
            <p>• React • Responsividade</p> 
        </div>
      </div>

      {/* Card 2 - Ferramentas */}
      <div className="card">
        <div className="card__content">
          <h4>Ferramentas</h4>
          <p>• Git & GitHub </p>
          <p>• VS Code</p>
          <p>• Consumo de APIs</p>
        </div>
      </div>

      {/* Card 3 - Outros */}
      <div className="card">
        <div className="card__content">
          <h4>Outros</h4>
          <p>Node.js  </p>
          <p>• SQL</p>
          <p>• Python (básico)</p>
        </div>
      </div>
    </>
  </div>
</section>

      {/* CERTIFICADOS */}
      <section id="certificados" className="secao">
        <h2>Certificados</h2>
        <ul className="certificados-list">
          <li>Fundamentos da Segurança Cibernética – Coursera / Google</li>
          <li>Ativos, Ameaças e Vulnerabilidades – Coursera / Google</li>
          <li>Gerenciar Riscos de Segurança – Coursera / Google</li>
          <li>Introdução à Ciência da Computação com Python – Coursera / USP</li>
          <li>Excel Avançado – ENAP</li>
        </ul>
      </section>

      {/* CONTATO */}
      <section id="contato" className="secao">
        <h2>Vamos conversar?</h2>
        <p>Estou aberto a oportunidades de estágio em front-end.</p>
        
        <div className="contact-info">
          <p><strong>Email:</strong> idreew2015@gmail.com</p>
          <p><strong>Telefone:</strong> (11) 94678-2169</p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://linkedin.com/in/henrique-possebon-09a4282b9" target="_blank">
              linkedin.com/in/henrique-possebon
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/masterxtale" target="_blank">
              github.com/masterxtale
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Henrique Possebon Barbosa • Feito com React</p>
      </footer>

    </div>
  );
}

export default App;