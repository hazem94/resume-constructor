import {
  isAuthenticated,
  loadPersistState,
  persistState
} from "helpers/localStorageHelpers";
import educationsReducer from "reducers/educationReducer";
import experienceBeingEditedReducer from "reducers/experiencesBeingEditedReducer";
import experiencesReducer from "reducers/experiencesReducer";
import userInfoReducer from "reducers/userInfoReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";

const persistentState = loadPersistState();
const rootReducer = combineReducers({
  form: formReducer,
  userInfo: userInfoReducer,
  experienceBeingEdited: experienceBeingEditedReducer,
  experiences: experiencesReducer,
  educations: educationsReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  persistentState,
  composeEnhancers(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  if (isAuthenticated()) {
    persistState(store.getState());
  }
});

export default store;
