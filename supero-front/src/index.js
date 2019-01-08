import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import activitiesReducer from "./reducers/activitiesReducer";
import loadingReducer from "./reducers/loadingReducer";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { connectRouter, ConnectedRouter } from "connected-react-router";
import { SELECT_ADDRESS } from "./actions/actionTypes";
import selectAddressReducer from "./reducers/selectAddressReducer";
import activityReducer from "./reducers/activityReducer";
import viewUserProfileReducer from "./reducers/viewUserProfileReducer";
import { reducer as toastrReducer } from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import viewConnectedUserReducer from "./reducers/viewConnectedUserReducer";
import changePageReducer from "./reducers/changePageReducer";
import changeActivitiesOrderReducer from "./reducers/changeActivitiesOrderReducer";
import connectedUserActivitiesReducer from "./reducers/connectedUserActivitiesReducer";

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = history =>
  combineReducers({
    activePage: changePageReducer,
    order: changeActivitiesOrderReducer,
    selectAddress: selectAddressReducer,
    loading: loadingReducer,
    activities: activitiesReducer,
    activityDetail: activityReducer,
    userProfile: viewUserProfileReducer,
    connectedUser: viewConnectedUserReducer,
    connectedUserActivities: connectedUserActivitiesReducer,
    toastr: toastrReducer,
    form: formReducer.plugin({
      addactivity: (state, action) => {
        switch (action.type) {
          case SELECT_ADDRESS:
            return {
              ...state,
              values: { ...state.values, address: action.address }
            };
          default:
            return state;
        }
      }
    }),
    router: connectRouter(history)
  });

const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware(routerMiddleware(history)))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
