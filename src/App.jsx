import "./App.css";
import Audience from "./Components/Audience/Audience";
import Banner from "./Components/Banner/Banner";
import Chart from "./Components/Chart/Chart";
import Footer from "./Components/Footer/Footer";
import Growth from "./Components/Growth/Growth";
import Logo from "./Components/Logo/Logo";
 
import Word from "./Components/Word/Word";

function App() {
  return (
    <>
      <Banner></Banner>
      <Logo></Logo>
      <Chart></Chart>
      <Audience></Audience>
      <Growth></Growth>
      <Word></Word>
      <Footer></Footer>
    </>
  );
}

export default App;
