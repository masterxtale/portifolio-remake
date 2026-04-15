import './App.css';
import Card from "./components/Card";

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

        <a href="/curriculo/Henrique_Possebon_Barbosa.pdf" target="_blank" className="botaoDownload">
          Baixar CV
        </a>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="secao">
        <div className="hero-content">
          <h1 className="titulo" id="titulohome">Olá, eu sou <span className="highlight">HENRIQUE POSSEBON</span></h1>
          <h2 className="subtitulohome" id="subtitulohome1">Estudante de Engenharia da Computação • Desenvolvedor Front-End</h2>
          <p className="paragrafohome" style={{ lineHeight:"1.7",  maxWidth:"50ch"}}>
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
        <h2 className="subtitulo" id="tituloFormacao" style={{fontSize:"4rem"}}>🎓 Formação</h2>
        <div className="section-content">
          <div className="card1">
            <div className="content">
              <p className="heading">Bacharelado em Engenharia da Computação</p>
              <p className="para">Anhanguera Educacional – Guarulhos/SP</p>
              <p className="para">9º semestre • Conclusão prevista: Dezembro de 2026</p>
              <button className="btn">
                <a id="btna" href="https://pt.wikipedia.org/wiki/Engenheiro_de_computa%C3%A7%C3%A3o">Saiba mais</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS - Ajustes estéticos */}
      <section id="projetos" className="secao">
        <div id="projetodestaquecard">
          <div style={{
            background: "linear-gradient(180deg, #6B21A8, #7C3AED)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            borderTop: "2px solid #ffffff",
            borderLeft: "2px solid #ffffff",
            borderRight: "2px solid #ffffff",
            borderRadius: "20px 20px 0 0"
          }}>
            <h2 style={{ margin: "1.2rem", color: "white", fontSize: "1.8rem" }}>PROJETO EM DESTAQUE</h2>
          </div>
          
          <div id="destaque1" style={{ gap: "2rem", padding: "1rem", justifyContent: "center", alignItems: "center" }}>
            <div style={{
              backgroundImage: "url('projetoQuiz.png')",
              width: "60dvw",
              maxWidth: "40rem",
              minHeight:"10rem",
              maxHeight: "20rem",
              height: "20dvw",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.5)"
            }}></div>
            
            <div style={{ width: "60%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ color: "#C4B5FD", marginBottom: "1rem" }}>SmartQuiz</h3>
              <p style={{ fontFamily: "Arial", lineHeight: "1.6", color: "#E2E8F0", fontSize:"1.2rem", maxWidth:"42ch", marginBottom:"0.5rem"}}>
                SmartQuiz é uma aplicação full stack de quiz inteligente que utiliza uma API de IA 
                para gerar perguntas dinâmicas em tempo real. 
                O projeto conta com frontend desenvolvido em React e backend em Node.js, 
                hospedado no GitHub Pages e Render respectivamente.
              </p>
              <div style={{display:"grid", gap:"1rem",width:"13rem"}}>
                <button className="button x">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>github</title>
                      <rect width="24" height="24" fill="none"></rect>
                      <path
                        d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                      ></path>
                    </g>
                  </svg>
                  frontend
                </button>
                <button className="button x">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>github</title>
                      <rect width="24" height="24" fill="none"></rect>
                      <path
                        d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                      ></path>
                    </g>
                  </svg>
                  backend
                </button>
                <button className="button x">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>github</title>
                      <rect width="24" height="24" fill="none"></rect>
                      <path
                        d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                      ></path>
                    </g>
                  </svg>
                  Site
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <Card/>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="secao" style={{background:"linear-gradient(to bottom, #72727275, #ec489a00)", padding:"2rem", borderRadius:"20px"}}>
        <h2 style={{fontSize:"3rem"}}>Habilidades Técnicas</h2>
        
        <div className="skills-grid">
          <>
            <div className="card">
              <div className="card__content">
                <h4>Front-end</h4>
                <p>• HTML5</p>
                <p>• CSS3</p> 
                <p>• JavaScript (ES6+)</p>
                <p>• React</p> 
              </div>
            </div>

            <div className="card">
              <div className="card__content">
                <h4>Ferramentas</h4>
                <p>• Git & GitHub</p>
                <p>• VS Code</p>
                <p>• Consumo de APIs</p>
              </div>
            </div>

            <div className="card">
              <div className="card__content">
                <h4>Outros</h4>
                <p>Node.js</p>
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