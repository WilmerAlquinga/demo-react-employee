import { Provider } from "react-redux";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import storeRedux from "./redux/store.redux";
import { LayoutContainer } from "./styled-components";

function App() {
  return (
    <Provider store={storeRedux}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
