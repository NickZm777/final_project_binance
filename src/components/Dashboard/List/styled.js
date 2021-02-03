import styled from "styled-components";

const List = styled.div`
  
  .active {
    box-shadow: 2px 3px 10px;
    background: transparent;
    border-radius: 3px;
    color: black;
    transition: 1s;
`;

List.Item = styled.div`
  padding: 5px
  color: black;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  &:hover {
    color: red;
  }
  div {
    margin: 10px;
  }
`;
export { List };
