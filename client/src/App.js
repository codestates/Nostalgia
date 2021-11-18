import {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect, useHistory} from 'react-router-dom';
import SignUp from './page/SignUp';
import Login from './page/Login';
import Mypage from './page/Mypage';
import MainList from './page/MainList'
import Footer from "../src/components/Footer";
import LanderPage from './page/Landerpage';

import LoginSuccess from '../src/components/LoginSuccess'

import LukaHeader from './components/LukaHeader';
import Itempage from './page/Itempage'
import axios from 'axios';





function App() {
    const [itemInfo, setItemInfo] = useState(null);
    const history = useHistory();

    // const [items, setItems] = useState([])
    // const [list, setList] = useState();
    // const [logoList, setLogoList] = useState();
  
    // const itemListHandle = () => {
    //   axios
    //   .get('http://localhost:4000/perfume/get-perfume-info-all',{
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true
    //   })
    //   .then((res)=>{
    //       console.log(res.data)
    //       setList(res.data)
    //   })
    // }


  return(
    <BrowserRouter>
     <div>
      {/* Header 넣기*/}
      <Switch>
        <Route 
        exact path= '/'
        render={() => <LanderPage />}
        />
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
        path= '/mainpage'
        component={MainList}/>
        <Route
        path='/itempage/:perfume_id'
        component={Itempage}/>
      </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
