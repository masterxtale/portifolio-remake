import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="cards">
        <div className="card red">
          <p className="tip">WeatherAPI App</p>
          <p className="second-text">Aplicação web que consulta o clima em tempo real a partir do nome de uma cidade, exibindo temperatura, vento e condições meteorológicas via API.</p>
            <div style={{display:"flex", gap:"2rem", marginTop:"1rem"}}><a style={{fontFamily:"Arial", textDecoration:"none", fontSize:"1rem", backgroundColor:"black", color:"white", padding:"0.1rem", paddingLeft:"2rem", paddingRight:"2rem", borderRadius:"20px", border:"2px solid white"}} href="">Git</a>
                                                                        <a style={{fontFamily:"Arial", textDecoration:"none", fontSize:"1rem", backgroundColor:"rgba(0, 51, 88, 0.48)", color:"white", padding:"0.1rem", paddingLeft:"2rem", paddingRight:"2rem", borderRadius:"20px", border:"2px solid white"}} href="">Site</a></div>
        </div>
        <div className="card blue">
          <p className="tip">A FAZER...</p>
          <p className="second-text"></p>
        </div>
        <div className="card green">
          <p className="tip">A FAZER...</p>
          <p className="second-text"></p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
.cards {
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1500px;        /* aumentado para comportar cards maiores */
    padding: 30px 0;
  }

  .cards .red   { background-color: #007e9e; }
  .cards .blue  { background-color: #0062ff; }
  .cards .green { background-color: #18cd5e; }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 300px;           /* 3x maior */
    width: 300px;            /* 3x maior */
    border-radius: 20px;     /* aumentado para ficar proporcional */
    color: white;
    cursor: pointer;
    transition: 400ms;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  .cards .card p.tip {
    font-size: 2.2em;        /* texto maior */
    font-weight: 700;
    margin: 0 0 12px 0;
  }

  .cards .card p.second-text {
    font-size: 1.1em;        /* texto maior */
    opacity: 0.9;
  }

  /* Efeito de Hover - Mantido o charme original */
  .cards .card:hover {
    transform: scale(1.15, 1.15);   /* um pouco mais suave que 1.2 */
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.85, 0.85);
  }

  /* ==================== RESPONSIVIDADE ==================== */

  @media (max-width: 1024px) {
    .cards {
      gap: 20px;
    }
    
    .cards .card {
      height: 260px;
      width: 260px;
    }

    .cards .card p.tip {
      font-size: 2em;
    }
    
    .cards .card p.second-text {
      font-size: 1em;
    }
  }

  @media (max-width: 600px) {
    .cards {
      gap: 15px;
    }
    
    .cards .card {
      height: 220px;
      width: 220px;
    }

    .cards .card p.tip {
      font-size: 1.7em;
    }
    
    .cards .card p.second-text {
      font-size: 0.95em;
    }
  }
`;

export default Card;