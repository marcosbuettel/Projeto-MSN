import React from 'react';
import styled from 'styled-components';
import msnButterfly from '../../images/msnButterfly.png';

const BoxFooterTelaMSN = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;

  img {
    width: 30px;
    margin-right: 10px;
  }
`;

const FooterTelaMSN = () => {
  return (
    <BoxFooterTelaMSN>
      <img src={msnButterfly} alt="msn-butterfly" />
      <p>
        MSN by <b>Marcos Buettel</b>
      </p>
    </BoxFooterTelaMSN>
  );
};

export default FooterTelaMSN;
