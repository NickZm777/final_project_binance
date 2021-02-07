import styled from "styled-components";

const Footer = styled.div`
  display: flex-row;
  width: 100%;
`;

Footer.Top = styled.div`
  display: flex;
  justify-content: space-around;
  background: #1e1e1f;
  color: #cccccc;
  border-bottom: 1px solid #383839;
  padding: 0 60px 10px;
`;

Footer.Links = styled.div``;
Footer.Credits = styled.div``;

Footer.Bottom = styled.div`
  background: #212123;
  color: #cccccc;
  padding: 1px 60px;
  text-align: justify;
  font-size: 12px;
`;
Footer.Legal = styled.div`
  background: #212123;
  color: white;
  text-align: justify;
  font-size: 14px;
  a {
    text-decoration: none;
    padding-right: 15px;
    color: #cccccc;
    &:hover {
      color: white;
      transition: 0.2s;
      text-decoration: underline;
    }
  }
`;

Footer.Box = styled.div`
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
    padding: 0 10px;
    color: #cccccc;
    &:hover {
      color: white;
      transition: 0.2s;
      text-decoration: underline;
    }
  }
  img {
    padding: 0 10px;
  }
`;
export { Footer };
