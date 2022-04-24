import React from 'react';
import styled from 'styled-components';
import UsersMSN from '../UsersMSN/UsersMSN';
import pic01 from '../../images/pic01.jpg';
import pic02 from '../../images/pic02.jpg';
import pic03 from '../../images/pic03.jpg';
import pic04 from '../../images/pic04.jpg';

const BoxUsuariosLogados = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  flex-grow: 1;
  width: 95%;
  margin: 0 auto;
  padding: 5px 10px;

  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    padding: 0;
    font-size: 20px;
  }

  h2 {
    color: #1d6e9f;
    font-size: 20px;
  }

  span {
    font-weight: 100;
    color: #c8c8c8;
    font-size: 18px;
  }
`;

const UsuariosLogados = () => {
  return (
    <BoxUsuariosLogados>
      <h2>
        Friends <span>(4)</span>
      </h2>

      <UsersMSN
        status="Busy"
        corStatus="#E7344A"
        userName="John"
        message=" - Always busy..."
        img={pic03}
      />

      <UsersMSN
        status="Online"
        corStatus="#34E762"
        userName="Ana"
        message=" - Life is good!"
        img={pic01}
      />

      <UsersMSN
        status="Online"
        corStatus="#34E762"
        userName="Rose"
        img={pic02}
      />

      <UsersMSN
        status="Away"
        corStatus="#FACB64"
        userName="Robert"
        message=" - Don't disturb."
        img={pic04}
      />

      <br />

      <h2>
        Offline <span>(2)</span>
      </h2>

      <UsersMSN status="Offline" corStatus="#D3D3D3" userName="Arnold" />

      <UsersMSN status="Offline" corStatus="#D3D3D3" userName="Joe" />
    </BoxUsuariosLogados>
  );
};

export default UsuariosLogados;
