import React, { useEffect } from 'react';
import './App.scss';
import * as actionCreator from "./Store/actions/index"
import { useDispatch } from "react-redux"
import ReactGA from 'react-ga';

if (window.location.hostname === "anyspaze.com") {
  ReactGA.initialize('UA-163309042-01');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCreator.getSateData())
  }, [dispatch])

  return (
    <div className="App">
      {props.children}
    </div>
  );
}

export default App;
