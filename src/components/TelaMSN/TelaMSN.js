import React from 'react';
import styled from 'styled-components';
import iconeMSN from '../../images/msnIcon.png';
import fecharMSN from '../../images/fecharMSN.png';
import bgTelaMSN from '../../images/bgTelaMSN.jpg';
import InfoUsuario from '../InfoUsuario/InfoUsuario';
import UsuariosLogados from '../UsuariosLogados/UsuariosLogados';
import FooterTelaMSN from '../FooterTelaMSN/FooterTelaMSN';

const BoxMSN = styled.section`
  border: 5px solid rgba(190, 205, 223, 0.4);
  height: 600px;
  width: 400px;
  margin: -100px auto;
  display: flex;
  flex-direction: column;
`;

const HeaderMSN = styled.div`
  background-color: rgba(190, 205, 223, 0.4);
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;

  img {
    width: 16px;
    margin-right: 5px;
  }

  div {
    display: flex;
    align-items: center;
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

const BoxInterna = styled.div`
  background-image: url(${bgTelaMSN});
  background-size: cover;
  padding: 10px 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TelaMSN = () => {
  return (
    <BoxMSN>
      <HeaderMSN>
        <div>
          <img src={iconeMSN} alt="icone-msn" />
          <p>Windows Live Messenger</p>
        </div>

        <FecharMSN>
          <img src={fecharMSN} alt="fechar-msn" />
        </FecharMSN>
      </HeaderMSN>

      <BoxInterna>
        <InfoUsuario />

        <UsuariosLogados />

        <FooterTelaMSN />
      </BoxInterna>
    </BoxMSN>
  );
};

export default TelaMSN;
