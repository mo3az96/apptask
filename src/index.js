import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./Components/reducers/reducers";


let store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><App store={store} /></Provider>, document.getElementById('root'));
serviceWorker.unregister();


