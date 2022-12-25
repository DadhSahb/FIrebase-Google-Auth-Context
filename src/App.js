import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/account" component={Account} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
