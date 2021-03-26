import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import Thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import AuthReducer from './Store/Reducers/AuthReducer';
import SearchReducer from './Store/Reducers/SearchReducer';
import WarehouseDetailReducer from './Store/Reducers/WarehouseDetailReducer';
import StartupScreen from "./Screen/StartUp";
import SignUpReducer from "./Store/Reducers/SignUpReducer";
import CurrentSearchReducer from "./Store/Reducers/CurrentSearch";
import UserWarehouseReducer from "./Store/Reducers/UserWarehouses";
import CommonData from "./Store/Reducers/CommonData"
import codePush from "react-native-code-push";
import SplashScreen from 'react-native-splash-screen';

const rootReducer = combineReducers({
  Auth: AuthReducer,
  search:SearchReducer,
  warehouse:WarehouseDetailReducer,
  signUp:SignUpReducer,
  currentSearch:CurrentSearchReducer,
  userWarehouse: UserWarehouseReducer,
  commonData:CommonData
});
const store = createStore(rootReducer, applyMiddleware(Thunk));

const App = ({ navigation }) => {

  useEffect(()=>{

   SplashScreen.hide()
  },[])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StartupScreen />
      </NavigationContainer>
    </Provider>
  )
};
const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
export default codePush(codePushOptions)(App);
