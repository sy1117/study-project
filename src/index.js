import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

//hot loader 3.0.0
import { AppContainer } from 'react-hot-loader'

const store = createStore(reducers, applyMiddleware(thunk));
const rootElement = document.getElementById('root');

ReactDOM.render(
  
    <Provider store={store}>
    <AppContainer>
            <App />
            </AppContainer>    
    </Provider>
    
, rootElement);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      ReactDOM.render(
        <AppContainer>
          <NextApp/>
        </AppContainer>
        ,
        document.getElementById('root')
      );
    });
  }