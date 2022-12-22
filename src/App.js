import "./App.css";
import Navbar from "./components/Navbar";
import ContextFunc from "./context/ContextProvider";

function App() {
  return (
    <ContextFunc>
      <Navbar />
    </ContextFunc>
  );
}

export default App;
