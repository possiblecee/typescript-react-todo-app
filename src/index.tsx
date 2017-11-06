/// <reference path="./index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './redux';
import App from './containers/App';

const Application = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <Application />,
    document.getElementById("root")
);