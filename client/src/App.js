import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import SignUp from './page/SignUp';
import Login from './page/Login';
import Mypage from './page/Mypage';
import Main from './page/MainList'
import Footer from "../src/components/Footer";
import LanderPage from './page/Landerpage';
import Zeenii_Header from './components/Zeenii_Header'

import LoginSuccess from '../src/components/LoginSuccess'

import LukaHeader from './components/LukaHeader';
import Item from './page/Item'




function App() {
  return(
    <BrowserRouter>

     <div>
      {/* Header 넣기*/}
      <Switch>
        <Route 
        exact path= '/'
        render={() => <Zeenii_Header />}
        />
        <Route 
        path= '/main'
        component={Main}/>
        <Route 
        path= '/LanderPage'
        component={LanderPage}
        />
        <Route 
        path='/signup'
        component={SignUp}
        />
        <Route 
        path='/Login'
        component={Login}
        />
        <Route
        path='/loginSuccess'
        component={LoginSuccess}/>
        <Route
        path='/mypage'
        component={Mypage}/>
        <Route
        path='/item'
        component={Item}/>
          

      </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
