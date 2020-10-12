import {createStore,compose,applyMiddleware} from 'redux' ;
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk' ;
import {composeWithDevTools} from 'redux-devtools-extension'


const composeEnhancer= ()=> composeWithDevTools
export const configstore = () => {
    return createStore(rootReducer, 
      composeWithDevTools(
      applyMiddleware(thunk)))
      ;
  };
