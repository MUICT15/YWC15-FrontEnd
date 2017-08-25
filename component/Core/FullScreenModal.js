import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.cyan};
  box-shadow: 0 0 16px ${colors.darkCyan};
`;

const FullScreenModal = props => (
  <Container>
    <ModalContainer>
      {props.children}
    </ModalContainer>
  </Container>
);

export default FullScreenModal;
