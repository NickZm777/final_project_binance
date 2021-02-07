import styled from "styled-components";

const List = styled.div`
  display: flex;
  justify-content: space-between;
`;

List.IntChanger = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  box-shadow: 2px 3px 10px;
  background: transparent;
  border-radius: 3px;
  .active {
    box-shadow: 2px 3px 10px;
    background: transparent;
    border-radius: 3px;
    color: black;
  }
  &:hover {
  }
`;

List.GrChanger = styled.div`
  display: flex;
  align-items: center;
  color: grey;
  .active {
    box-shadow: 2px 3px 10px;
    border-radius: 3px;
    color: black;
  }
`;

List.Button = styled.div`
  cursor: pointer;
  box-shadow: 2px 3px 10px;
  background: transparent;
  border-radius: 3px;
  padding: 2px 10px;
  width: 40px;
  margin-right: 25px;
  font-size: 14px;
  &hover {
    box-shadow: inset 2px 3px 10px;
    transition: 300ms;
  }
  .active {
    box-shadow: 2px 3px 10px;
    background: transparent;
    border-radius: 3px;
    color: black;
  }
`;

List.Item = styled.div`
  padding: 3px 16px;
  color: ${(props) => (props.isDarkTheme === true ? "red" : "green")};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
  }
`;

List.Theme = styled.div`
  border: 1px solid;
  cursor: pointer;
  .passive {
    color: red;
    background-color: yellow;
    ${"" /* display: none; */}
  }
`;

export { List };
