import React from 'react';
import styled from 'styled-components';
import fotoUsuario from '../../images/me.jpg';
import song from '../../images/song.png';

const BoxInfoUsuario = styled.div`
  display: flex;
  padding: 20px 10px;

  img {
    //border: 2px solid #79ffb0;
    border: 2px solid black;
    border-radius: 5px;
    width: 60px;
    margin-right: 10px;
  }
`;

const MusicaMSN = styled.div`
  display: flex;
  align-items: center;

  img {
    border: none;
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;

const InfoUsuario = () => {
  return (
    <BoxInfoUsuario>
      <img src={fotoUsuario} alt="foto-usuario" />
      <div>
        <h3>Marcos Buettel</h3>
        <p>Programando...</p>

        <MusicaMSN>
          <img src={song} alt="musica-msn" />
          <p>
            <b>Listening to:</b> Bon Jovi - It's My Life
          </p>
        </MusicaMSN>
      </div>
    </BoxInfoUsuario>
  );
};

export default InfoUsuario;
