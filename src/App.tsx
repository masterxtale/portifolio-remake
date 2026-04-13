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
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Olá, eu sou <span className="highlight">Henrique Possebon</span></h1>
          <h2>Estudante de Engenharia da Computação • Desenvolvedor Front-End</h2>
          <p>
            Transformo ideias em interfaces modernas, responsivas e funcionais 
            utilizando React, JavaScript, HTML e CSS.
          </p>
          
          <div className="cta-buttons">
            <a href="#projetos" className="btn-primary">Ver meus projetos</a>
            <a href="#contato" className="btn-secondary">Falar comigo</a>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="section">
        <h2>Sobre Mim</h2>
        <div className="section-content">
          <p>
            Sou estudante do <strong>9º semestre de Engenharia da Computação</strong> na Anhanguera Educacional, 
            com conclusão prevista para dezembro de 2026.
          </p>
          <p>
            Apaixonado por desenvolvimento front-end, tenho experiência prática na criação de interfaces 
            responsivas com <strong>React</strong>, integração com APIs, JavaScript, HTML5 e CSS3.
          </p>
          <p>
            Busco minha primeira oportunidade de <strong>estágio em front-end</strong>, onde possa contribuir 
            com código limpo e evoluir rapidamente para o desenvolvimento full-stack.
          </p>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section id="formacao" className="section">
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
      <section id="projetos" className="section">
        <h2>Projetos em Destaque</h2>
        <p className="section-description">
          Aqui ficarão meus principais projetos. Por enquanto estou atualizando esta seção.
        </p>
        {/* Cards de projetos serão adicionados aqui */}
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="section">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Front-end</h4>
            <p>HTML5 • CSS3 • JavaScript (ES6+) • React • Responsividade</p>
          </div>
          <div className="skill-category">
            <h4>Ferramentas</h4>
            <p>Git & GitHub • VS Code • Consumo de APIs</p>
          </div>
          <div className="skill-category">
            <h4>Outros</h4>
            <p>Node.js • SQL • Python (básico)</p>
          </div>
        </div>
      </section>

      {/* CERTIFICADOS */}
      <section id="certificados" className="section">
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
      <section id="contato" className="section">
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