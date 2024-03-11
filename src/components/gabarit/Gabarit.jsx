import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledIframe = styled.iframe`
    width: 85%;
    height: 850px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* добавляем тень для эффекта поднятости */
`;

const Gabarit = () => {
  return (
    <Container>
      <StyledIframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5qoq92QqNXgWBHU9umjaEEB-GZji2qNK7jj2q7RkgeQbx2mV8HEEVA5xzV8YvD0QnnfV8gNrpT8oF/pubhtml?widget=true&amp;headers=false"></StyledIframe>
    </Container>
  );
};

export default Gabarit;
