import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Render from './page/Render';
import Footer from './components/Footer';


function App() {
  return(
    <BrowserRouter>
     <div className="App">
      {/* Header 넣기*/}
      <Switch>
        <Route 
        exact path= '/'
        render={() => <Render />}
        />
        <Route path= '/main'/>

      </Switch>
     </div>
    </BrowserRouter>

  );
}

export default App;
