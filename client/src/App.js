import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import SignUp from './page/SignUp';
import Login from './page/Login';
import Mypage from './page/Mypage';

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
        render={() => <Landerpage />}
        />
        <Route 
        path= '/login'
        component={Login}
        />
        <Route 
        path='/signup'
        component={SignUp}
        />
        <Route
        path='/mypage'
        component={Mypage}/>
        <Route 
        path= '/mainpage'
        component={Main}/>
      </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
