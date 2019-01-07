import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import MovieDashboard from "./components/MovieDashboard";


class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <MovieDashboard />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

