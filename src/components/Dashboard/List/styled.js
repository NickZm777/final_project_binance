import styled from "styled-components";

const List = styled.div`
  
  cursor: pointer;
  color:#716767;
  .active {
    box-shadow: 2px 3px 10px;
    background: transparent;
    border-radius: 3px;
    color: black;
    transition: .2s;
`;
List.Head = styled.div`
  display: flex;
  font-size: 12px;
  padding: 2px 0;
  justify-content: space-around;
  background: #f0b90b;
  color: black;
  border-bottom: 1px solid grey;
  div {
  }
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
