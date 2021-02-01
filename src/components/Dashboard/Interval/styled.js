import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: lightgrey;
  .active {
    border: 1px solid blue;
    background-color: lightyellow;
  }
`;

List.Button = styled.button`
  background-color: white;
`;

List.Item = styled.div`
  padding: 5px 30px;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: blue;
  }
`;

export { List };
