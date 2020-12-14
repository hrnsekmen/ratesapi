import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Ratebox from "./components/Ratebox";
import Rates from "./components/Rates";

function App() {
  return (
    <div className="main-container">
      {/* Header */}
      <Header />
      {/* rates comp */}
      <Rates />
      {/* Rate Box */}
      <Ratebox />
      {/* buttons */}
      <Buttons />
    </div>
  );
}

export default App;
