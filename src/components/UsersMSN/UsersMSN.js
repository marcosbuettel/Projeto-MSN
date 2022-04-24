import React from 'react';
import styled from 'styled-components';
import ConversaMSN from '../ConversaMSN/ConversaMSN';
import { useState } from 'react';

const InfoUsers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

  p {
    margin-left: 5px;
  }
`;

const StatusUser = styled.div`
  background-color: ${(props) => props.status};
  width: 10px;
  height: 10px;
  border-radius: 2px;
`;

const UsersMSN = (props) => {
  const [showElement, setShowElement] = useState(false);

  const showOrHide = (props) => {
    if (showElement === false) {
      setShowElement(true);
    } else {
      setShowElement(false);
    }
  };
  return (
    <>
      <InfoUsers onClick={showOrHide}>
        <StatusUser status={props.corStatus}></StatusUser>
        <p>
          {props.userName}{' '}
          <span>
            ({props.status}){props.message}
          </span>
        </p>
      </InfoUsers>
      {showElement ? (
        <ConversaMSN userName={props.userName} img={props.img} />
      ) : null}
    </>
  );
};

export default UsersMSN;
