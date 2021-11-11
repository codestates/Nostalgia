import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Footer from "../src/components/Footer"
import Landerpage from "../src/page/Landerpage"
import Main from '../src/page/Main'


function App() {
  return(
    <BrowserRouter>
     <div className="App">
      {/* Header 넣기*/}
      <Switch>
        <Route 
        exact path= '/'
        >
          <Landerpage/>
        </Route>
        <Route path= '/ mainpage'>
          <Main/>
        </Route>
        
      </Switch>
     </div>
    </BrowserRouter>

  );
}

export default App;
