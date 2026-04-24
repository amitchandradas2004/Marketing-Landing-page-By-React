import "./App.css";
import Audience from "./Components/Audience/Audience";
import Banner from "./Components/Banner/Banner";
import Chart from "./Components/Chart/Chart";
import Growth from "./Components/Growth/Growth";
import Logo from "./Components/Logo/Logo";

function App() {
  return (
    <>
      <Banner></Banner>
      <Logo></Logo>
      <Chart></Chart>
      <Audience></Audience>
      <Growth></Growth>
    </>
  );
}

export default App;
