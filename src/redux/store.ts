import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const saga = createSagaMiddleware();
let middlewares: any = [saga];

const composer = compose(applyMiddleware(...middlewares));
export const store = createStore(reducers, composer);

saga.run(sagas);
