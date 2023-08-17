import reduxStore from './redux';
import { Provider } from "react-redux";
import Router from "./routes/index";
const { store } = reduxStore();

function App() {
  return (
    <Provider store={store}>
       <Router />
    </Provider>
  );
}

export default App;
