import './App.css';

function App() {
  return (
    <div className="main">

      {/* Navbar */}
      <div style={{padding:"1.4rem", background:"rgba(15, 15, 30, 0.95)"}}>
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
      </nav></div>

      {/* HERO SECTION */}
      <section id="home" className="secao">
        <div className="hero-content">
          <h1 className="titulo" id="titulohome">Olá, eu sou <span className="highlight">HENRIQUE POSSEBON</span></h1>
          <h2 className="subtitulohome" id="subtitulohome1">Estudante de Engenharia da Computação • Desenvolvedor Front-End</h2>
          <div id="divphome" style={{display:"flex", width:"100%"}}><p className="paragrafohome" style={{ lineHeight: "1.7", maxWidth: "80%" }}>
            Transformo ideias em interfaces modernas, responsivas e funcionais
            utilizando React, JavaScript, HTML e CSS.
          </p></div>

          <div className="cta-buttons">
            <a href="#projetos" className="btn-primary">Ver meus projetos</a>
            <a href="#contato" className="btn-secondary">Falar comigo</a>
          </div>
        </div>
        <div id="fotoPerfil"></div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="secao">
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
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
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section id="formacao" className="secao">
        <h2 className="subtitulo" id="tituloFormacao" style={{ fontSize: "4rem" }}>🎓 Formação</h2>
        <div className="skills-grid" id="formacaodv" style={{display:"flex"}}>  
          <div>
            
            <div className="section-content">
              <div className="card1">
                <div className="content">
                  <p className="heading" style={{margin:"0.5em"}}>Bacharelado em Engenharia da Computação</p>
                  <p className="para">Anhanguera Educacional – Guarulhos/SP</p>
                  <p className="para">9º semestre • Conclusão prevista: Dezembro de 2026</p>
                  <button className="btn">
                    <a id="btna" href="https://pt.wikipedia.org/wiki/Engenheiro_de_computa%C3%A7%C3%A3o">Saiba mais</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className="card1">
            <div>
              <div style={{margin:"1.5em", fontSize: "clamp(0rem, 1.5dvw, 1.6rem)"}}><h2>Certificados</h2></div>
              <ul className="certificados-list" style={{fontSize:"clamp(0rem, 1.3dvw, 0.9em)"}}>
                <li>Fundamentos da Segurança Cibernética – Coursera / Google</li>
                <li>Ativos, Ameaças e Vulnerabilidades – Coursera / Google</li>
                <li>Gerenciar Riscos de Segurança – Coursera / Google</li>
                <li>Introdução à Ciência da Computação com Python – Coursera / USP</li>
                <li>Excel Avançado – ENAP</li>
              </ul>
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
            borderBottom: "2px solid #8000f7",
            borderRadius: "20px 20px 0 0"
          }}>
            <h2 style={{ margin: "1.2rem", color: "white", fontSize: "1.8rem" }}>PROJETO EM DESTAQUE</h2>
          </div>

          <div id="destaque1" style={{ gap: "2rem", padding: "1rem", justifyContent: "center", alignItems: "center" }}>
            <div style={{
              backgroundImage: "url('projetoQuiz.png')",
              width: "60dvw",
              maxWidth: "40rem",
              minHeight: "10rem",
              maxHeight: "20rem",
              height: "20dvw",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.5)"
            }}></div>

            <div style={{ width: "60%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ color: "#C4B5FD", marginBottom: "1rem" }}>SmartQuiz</h3>
              <p style={{ fontFamily: "Arial", lineHeight: "1.6", color: "#E2E8F0", fontSize: "1.2rem", maxWidth: "42ch", marginBottom: "0.5rem" }}>
                SmartQuiz é uma aplicação full stack de quiz inteligente que utiliza uma API de IA
                para gerar perguntas dinâmicas em tempo real.
                O projeto conta com frontend desenvolvido em React e backend em Node.js,
                hospedado no GitHub Pages e Render respectivamente.
              </p>
              <div style={{ display: "grid", gap: "1rem", width: "13rem" }}>
                <a className="button x" href='https://github.com/masterxtale/backend-quiz-with-openai'>
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
                </a>
                <a className="button x" href='https://github.com/masterxtale/quiz-with-openai'>
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
                </a>
                <a className="button x" href='https://masterxtale.github.io/quiz-with-openai/'>
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
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          <div className="card4">
            <div className="card4__img" style={{ backgroundImage: "url('verclima.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
            <div className="card4__descr-wrapper">
              <p className="card4__title">
                WeatherAPI App
              </p>
              <p className="card4__descr">
                Aplicação de previsão do tempo em tempo real construída com <strong>HTML5</strong>, <strong>CSS3</strong> e <strong>JavaScript</strong>.
                Consome a API do OpenWeatherMap para exibir dados meteorológicos atualizados de qualquer cidade.
              </p>
              <div className="card4__links">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg">&lt;<path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
                  <a className="link" href="https://masterxtale.github.io/Ver-clima/">Site</a>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                  <a className="link" href="https://github.com/masterxtale/Ver-clima">Codigo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card4">
            <div className="card4__img"></div>
            <div className="card4__descr-wrapper">
              <p className="card4__title">
                Futuro projeto
              </p>
              <p className="card4__descr">

              </p>
              <div className="card4__links">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg">&lt;<path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
                  <a className="link" href="#">Preview</a>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                  <a className="link" href="#">Code</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card4">
            <div className="card4__img"></div>
            <div className="card4__descr-wrapper">
              <p className="card4__title">
                Futuro projeto
              </p>
              <p className="card4__descr">

              </p>
              <div className="card4__links">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg">&lt;<path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"></path></svg>
                  <a className="link" href="#">Preview</a>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                  <a className="link" href="#">Code</a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="secao" style={{ background: "linear-gradient(to bottom, #72727275, #ec489a00)", padding: "2rem", borderRadius: "20px" }}>
        <h2 style={{ fontSize: "3rem" }}>Habilidades Técnicas</h2>

        <div className="skills-grid">
          <>
            <div className="card">
              <div className="card__content">
                <h4>Front-end</h4>
                <p>• HTML5 + CSS</p>
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