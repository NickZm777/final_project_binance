import styled from "styled-components";

const List = styled.div`
  ${"" /* width: 150px; */}
  .active {
    border: 1px solid orange;
    background-color: lightblue;
    transition: 1s;
`;

List.Item = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  color: black;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  &:hover {
    color: red;
  }
  div {
    margin-right: 30px;
  }
`;
export { List };
