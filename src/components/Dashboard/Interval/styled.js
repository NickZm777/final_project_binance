import styled from "styled-components";

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

List.IntChanger = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 12px;
  box-shadow: 2px 3px 10px;
  background: ${(props) => (props.isDarkTheme === true ? "" : "#5f56bf")};
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
  flex-wrap: wrap;
  align-items: center;

  color: ${(props) => (props.isDarkTheme === true ? "grey" : "white")};
  .active {
    box-shadow: 2px 3px 10px;
    border-radius: 3px;
    color: black;
  }
`;

List.Button = styled.div`
  cursor: pointer;
  box-shadow: 2px 3px 10px;
  background: ${(props) => (props.isDarkTheme === true ? "white" : "#796cff")};
  border-radius: 3px;
  padding: 2px 10px;
  width: 40px;
  margin: 3px 5px 3px 40px;
  font-size: 14px;
  &hover {
    box-shadow: inset 2px 3px 10px;
    transition: 300ms;
  }
  .active {
    box-shadow: 2px 3px 10px;
    ${"" /* background: transparent; */}
    border-radius: 3px;
    color: black;
  }
`;

List.Item = styled.div`
  padding: 3px 16px;
  color: ${(props) => (!props.isDarkTheme === true ? "white" : "grey")};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
  }
`;

List.Theme = styled.div`
  cursor: pointer;
  margin-left: auto;
  img {
    width: 20px;
    height: 20px;
  }

  .dark {
    font-size: 12px;
    padding: 3px 4px;
    box-shadow: 2px 3px 10px;
    border-radius: 3px;
    background: #000000c4;
    color: white;
  }
  .light {
    font-size: 12px;
    padding: 3px 3px;
    box-shadow: 2px 3px 10px;
    border-radius: 3px;
    background: white;
    color: black;
  }
`;

export { List };
