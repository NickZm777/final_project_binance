import "./App.css";
import { HeaderComponent } from "./components/Header/index";
import { DashboardComponent } from "./components/Dashboard/index";
import { FooterComponent } from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <DashboardComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
