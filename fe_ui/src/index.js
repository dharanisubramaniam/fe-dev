import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateContextProvider from './redux/StateProvider';
import { initialState ,reducer} from './redux/Reducer';

ReactDOM.render(
  <StateContextProvider reducer={reducer} initialState={initialState}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StateContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
