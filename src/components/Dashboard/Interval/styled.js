import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .active {
    border: 2px solid red;
  }
`;

List.Button = styled.button``;

List.Item = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: orange;
  }
`;

export { List };
