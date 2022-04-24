import React from 'react';
import styled from 'styled-components';
import msnMsg from '../../images/msnMsg.png';
import fecharMSN from '../../images/fecharMSN.png';
import fotoUsuario from '../../images/me.jpg';
import bgTelaMsg from '../../images/bgTelaMsg.png';

const BoxConversaMSN = styled.div`
  border: 5px solid rgba(190, 205, 223, 0.4);
  height: 500px;
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  top: 10%;
  left: 25%;
  background-image: url(${bgTelaMsg});
  background-size: cover;
`;

const HeaderConversaMSN = styled.div`
  background-color: rgba(190, 205, 223, 0.4);
  display: flex;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-bottom: 5px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 20px;
  }
`;

const FecharMSN = styled.div`
  cursor: pointer;
  img {
    width: 40px;
    margin-top: -10px;
    margin-right: 0px;
  }
`;

const BoxMsgContent = styled.div`
  display: flex;
  flex-grow: 1;
`;

const BoxImgUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  flex-direction: column;
  width: 20%;
  height: 100%;

  img {
    width: 120px;
    border: 4px solid #a9c2a5;
    border-radius: 6px;
  }
`;

const BoxConversa = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
`;

const BoxConversaMsg = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 85%;
  border: 1px solid #e1e1e1;
`;

const BoxConversaDigitar = styled.input`
  width: 100%;
  height: 45px;
  margin-top: 10px;
  resize: none;
  padding: 5px;
  font-size: 18px;
`;

const MensagemEnviada = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  p {
    margin-bottom: 20px;
  }
`;

export default class conversaMSN extends React.Component {
  state = {
    inputMensagem: '',
    mensagens: [],
    mensagemUser: [],
  };

  escreverMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  enviarMensagem = (event) => {
    if (this.state.inputMensagem !== '') {
      //AQUI EU VERIFICO SE FOI APERTADO O ENTER OU O BOTÃO FOI CLICADO
      if (event.key === 'Enter') {
        const mensagemRecebida = {
          mensagem: this.state.inputMensagem,
          id: Math.random(),
        };

        const novaMensagem = [...this.state.mensagens, mensagemRecebida];
        this.setState({ mensagens: novaMensagem });
        this.setState({
          inputMensagem: '',
        });
      }
    }
  };

  //const ConversaMSN = (props) => {
  render() {
    const exibirMensagens = this.state.mensagens.map((mensagem) => {
      return (
        <div>
          <p>
            <b>Marcos Buettel:</b> <br />
            {mensagem.mensagem}
          </p>
        </div>
      );
    });

    return (
      <BoxConversaMSN>
        <HeaderConversaMSN>
          <div>
            <img src={msnMsg} alt="icon-msn-msg" />
            <p>{this.props.userName} - Conversation</p>
          </div>

          <FecharMSN>
            <img src={fecharMSN} alt="fechar-msn" />
          </FecharMSN>
        </HeaderConversaMSN>

        <BoxMsgContent>
          <BoxImgUser>
            <img src={this.props.img} alt="img-user" />
            <img src={fotoUsuario} alt="img-user" />
          </BoxImgUser>

          <BoxConversa>
            <BoxConversaMsg>
              <MensagemEnviada>{exibirMensagens}</MensagemEnviada>
            </BoxConversaMsg>
            <BoxConversaDigitar
              onKeyPress={this.enviarMensagem}
              onChange={this.escreverMensagem}
              value={this.state.inputMensagem}
            ></BoxConversaDigitar>
          </BoxConversa>
        </BoxMsgContent>
      </BoxConversaMSN>
    );
  }
}

//export default ConversaMSN;
