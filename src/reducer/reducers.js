const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const GET_AUTH = "GET_AUTH";
const SET_SELECTED_COURSE = "SET_SELECTED_COURSE";

export function gethAuth() {
  return {
    type: GET_AUTH
  };
}

export function setSelectedCourse(id) {
  return {
    type: SET_SELECTED_COURSE,
    selectedCourse: id
  };
}

const initialAuth = {
  auth: null
};

const initialSelectedCourse = {
  selectedCourse: { id: null, title: [] }
};

const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        auth: state.auth
      };
    default:
      return state;
  }
};

const selectedCourseRedusecer = (state = initialSelectedCourse, action) => {
  switch (action.type) {
    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.selectedCourse
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  selectedCourse: selectedCourseRedusecer
});

const tacticsStore = createStore(rootReducer, applyMiddleware(logger));

export default tacticsStore;
