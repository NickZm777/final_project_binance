import styled from "styled-components";

const ListBlock = styled.div`
  margin: 8px 5px;
  justify-content: space-between;
  display: flex;
  div {
    font-size: 12px;
    padding: 5px 10px;
  }
  &:hover {
    color: black;
  }
`;

ListBlock.Head = styled.div`
  display: flex;
`;

ListBlock.Body = styled.div``;

export { ListBlock };
