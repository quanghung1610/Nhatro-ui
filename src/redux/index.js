import rootReduucer from "../store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore } from "redux"

const reduxStore = () => {
    const store = createStore(rootReduucer);
    const persistor = persistStore(store);

    return { store, persistor}
}

export default reduxStore;