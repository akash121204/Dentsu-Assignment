import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './App.css';
import Flows from './components/Flows/flows';
import {
  BrowserRouter as Router, Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/flows">
            <Flows />
          </Route>
          <Route exact path="/">
            <Redirect to="/flows" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
