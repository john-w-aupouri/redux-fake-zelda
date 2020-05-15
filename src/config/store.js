import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'

// Each React Component that will use state will have a reducer. Those Components will be included in the rootReducer
// A reduecer is a javascript object, that has keys and the keys have values and the values are your storage state and the keys are how you access tbe storage state.

// Create root reducer
// the key is player or map, the value is whatever the reducer returns
const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
})

// this allows the browser to inspect the redux store while the app is being built
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store