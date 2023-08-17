import authRedux from "./authReducer";
import userRedux from "./userReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import {persistReducer} from "redux-persist";

const commonConfig = {
    storage,
    stateReconciler: authRedux, autoMergeLevel2
}

const authConfiig = {
    ...commonConfig,
    key: "auth",
    whitelist: ['isLoggedn', 'token']
}

const rootReduucer = combineReducers({
    auth: persistReducer(authConfiig, authRedux),
    user: userRedux
})

export default rootReduucer;