import styled from "styled-components";

const Head = styled.div`
  background: #020202;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

Head.H1 = styled.h1`
  flex-grow: 1;
  color: white;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 1.7px;
`;

Head.Logo = styled.div`
  align-items: center;
  padding: 15px 15px;
  background: #020202;
`;

export { Head };
