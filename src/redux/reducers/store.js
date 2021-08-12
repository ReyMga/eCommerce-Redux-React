import {createStore} from 'redux/store';
import reducers from './reducers/index';



const store = createStore(reducers,
    {},
    window._REDUX_DEVTOOLS_EXTENSIONS_&& window._REDUX_DEVTOOLS_EXTENSIONS_()
    );

export default reducers;