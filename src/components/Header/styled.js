import styled from "styled-components";

const Head = styled.div`
  background: #332f2ff2;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

Head.H1 = styled.h1`
  background: #332f2ff2;

  flex-grow: 1;
  color: white;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 1.7px;
`;

Head.Logo = styled.div`
  align-items: center;
  margin-left: 25px;
  background: #332f2ff2;
`;

export { Head };
