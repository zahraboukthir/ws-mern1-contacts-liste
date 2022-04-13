import { createStore, applyMiddleware, compose } from "redux";
import contactreducer from "./Reducers/contactreducer";
import thunk from "redux-thunk";
const devtool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  contactreducer,
  compose(applyMiddleware(thunk), devtool)
);
