import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import SignUp from './page/SignUp';
import Login from './page/Login';
import Mypage from './page/Mypage';
import Main from './page/Main'
import Footer from "../src/components/Footer";
import LanderPage from './page/Landerpage';
import LukaHeader from './components/LukaHeader';
import Item from './page/Item'


function App() {
  return(
    <BrowserRouter>
      {/* Header 넣기*/}
      <Switch>
        <Route 
        exact path= '/'
        render={() => <Main />}
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

        <Route
        path='/mypage'
        component={Mypage}/>

        <Route
        path='/item'
        component={Item}/>
          

      </Switch>
    </BrowserRouter>
  );
}

export default App;
