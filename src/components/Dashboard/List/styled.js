import styled from "styled-components";

const List = styled.div`
  cursor: pointer;
  color: ${(props) => (!props.dark === true ? "#92a0ea" : "#716767")};
  .active {
    box-shadow: 2px 3px 10px;
    background: transparent;
    border-radius: 3px;
    color: ${(props) => (!props.dark === true ? "#92a0ea" : "black")};
    transition: 0.2s;
    color: ${(props) => (!props.dark === true ? "#f0b90b" : "black")};
  }
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
  padding: 5px;
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
