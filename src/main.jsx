import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Game from './containers/Game';
import reducer from './reducers/reducer';
import { createStore } from 'redux';
import './index.css';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Game />
  </Provider>
);
