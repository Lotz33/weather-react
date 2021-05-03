import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Weather defaultCity="Bristol, UK" />
      <Footer />
    </div>
  );
}

export default App;
