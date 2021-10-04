import Header from './Header/header';
import Footer from './Footer/footer';
import './App.css';
import Flows from './Flows/flows';
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
