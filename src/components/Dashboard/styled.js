import styled from "styled-components";

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
`;

Dashboard.TopInterval = styled.div`
  margin: 15px;
`;

Dashboard.Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${"" /* height: 300px; */}
  border: 1px solid grey;
  margin: 5px 15px;
`;

Dashboard.Bottom = styled.div``;

export { Dashboard };
