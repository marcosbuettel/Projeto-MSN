import styled from 'styled-components';
import background from './images/bg.jpg';
import botaoIniciar from './images/botaoIniciar.png';
import iconeConexao from './images/conexao.png';
import iconeMSN from './images/msnIcon.png';
import TelaMSN from './components/TelaMSN/TelaMSN';
import { useState } from 'react';

const AreaTrabalho = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const PapelParede = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 94%;
  width: 100%;
`;

const IconeMSN = styled.div`
  text-align: center;
  width: fit-content;
  padding: 10px;
  color: white;
  font-size: 24px;
  text-shadow: black 0.1em 0.1em 0.2em;
  cursor: pointer;

  img {
    width: 70px;
  }
`;

const BarraTarefas = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2258d6;
  height: 6%;
`;

const ProgramasAbertos = styled.div`
  display: flex;
  align-items: center;
`;

const BotaoIniciar = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 30px;
  font-weight: bold;
  padding: 0 20px;
  background-color: #49ad4a;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;
  cursor: pointer;

  img {
    width: 30px;
    margin-right: 10px;
  }
`;

const MsnBarraTarefas = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 10px;
  box-shadow: -1px -1px 1px #325d6f, 1px 1px 1px #bfe3f2;
  -webkit-box-shadow: -1px -1px 1px #325d6f, 1px 1px 1px #bfe3f2;
  -moz-box-shadow: -1px -1px 1px #325d6f, 1px 1px 1px #bfe3f2;
  padding: 5px 15px;
  background-color: #0785d1;

  img {
    width: 24px;
    margin-right: 10px;
  }
`;

const DataHora = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 0 10px;
  background-color: #0c9cf3;

  img {
    width: 30px;
    margin-right: 10px;
  }

  div {
    text-align: center;
  }
`;

const now = new Date();

const horaLocal = now.getHours() + ':' + now.getMinutes();
const dataLocal =
  now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();

function App() {
  const [showElement, setShowElement] = useState(false);

  const showOrHide = () => {
    if (showElement === false) {
      setShowElement(true);
    } else {
      setShowElement(false);
    }
  };

  return (
    <AreaTrabalho>
      <PapelParede>
        <IconeMSN onClick={showOrHide}>
          <img src={iconeMSN} alt="icone-msn" />
          <p>MSN Messenger</p>
        </IconeMSN>

        {showElement ? <TelaMSN /> : null}
      </PapelParede>
      <BarraTarefas>
        <ProgramasAbertos>
          <BotaoIniciar>
            <img src={botaoIniciar} alt="botao-iniciar" />
            <p>Iniciar</p>
          </BotaoIniciar>

          {showElement ? (
            <MsnBarraTarefas>
              <img src={iconeMSN} alt="icone-msn" />
              <p>Windows Live Mess...</p>
            </MsnBarraTarefas>
          ) : null}
        </ProgramasAbertos>

        <DataHora>
          <img src={iconeConexao} alt="icone-conexao" />
          <div>
            <p>{horaLocal}</p>
            <p>{dataLocal}</p>
          </div>
        </DataHora>
      </BarraTarefas>
    </AreaTrabalho>
  );
}

export default App;
