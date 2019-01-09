import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import MovieDashboardContainer from "./containers/MovieDashboardContainer";
import Footer from './components/Footer';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
    render() {
        return(
          <div>
          <Header />
          <div id="page-wrapper" className="gray-bg" style={{minHeight: "1720px"}}>
            <div className="wrapper wrapper-content animated fadeInRight">
              <div className="row" style={{backgroundColor: "white", padding: "25px"}}>
                <MovieDashboardContainer />
              </div>
            </div>
            <Footer />
          </div>
          </div>
        );
    }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('wrapper')
);

