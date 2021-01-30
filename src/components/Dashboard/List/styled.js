import styled from "styled-components";

const List = styled.div`
  width: 150px;
`;

List.Item = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  color: black;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: green;
  }
`;
export { List };
