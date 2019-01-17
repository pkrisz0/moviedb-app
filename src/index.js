import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MovieDashboardContainer from './containers/MovieDashboardContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import store from './store';

import './helpers/index.css';

const App = () => (
  <div>
    <Header />
    <div id="page-wrapper" className="gray-bg" style={{ minHeight: '1720px' }}>
      <div className="wrapper wrapper-content animated fadeInRight">
        <MovieDashboardContainer />
      </div>
      <Footer />
    </div>
  </div>
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('wrapper'),
);
