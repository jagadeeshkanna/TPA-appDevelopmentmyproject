 import logo from './logo.svg';
 import './App.css';
 import React from 'react';
import ProjectContact from './ProjectContact';
import ProjectHome from './ProjectHome';
import ProjectLocation from './ProjectLocation';
import ProjectRegister from './ProjectRegister';
 import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 import ProjectLogin from './ProjectLogin';
 import ProjectCategory from "./ProjectCategory";
// import SearchFilter from './SearchFilter';
 import ProjectcHeritage from './ProjectcHeritage';
import ProjectcBeach from './Projectcbeach';
 import ProjectcHills from './ProjectcHills';
 import ProjectcTemple from "./ProjectcTemple";
 import ProjectcMuseum from "./ProjectcMuseum";
 import ProjectcZoo from './ProjectcZoo';
 import uproject from "./uproject";
import Feedback from "./Feedback";
import ProjectPayment from "./ProjectPayment";
import RegistrationForm from './RegistrationForm';
import Register from "./Register";
import Mhotel from "./Mhotel";
import ProjectcHotelloc from "./ProjectcHotelloc";
import ProjectcHotel from "./ProjectcHotel";  
import ProjectOffer from './ProjectOffer';

import Hotel from "./Hotel";

function App() {
  
  return (
     <Router>
    <div>
        <Switch>
 {/* <Route exact path='/' component={uproject}></Route> 
 <Route exact path='/' component={uproject}></Route>   */}
 <Route exact path='/' component={ProjectLogin}></Route>  
 <Route exact path='/Register' component={Register}></Route>
   <Route exact path='/ProjectHome' component={ProjectHome}></Route>
   <Route exact path='/ProjectLocation' component={ProjectLocation}></Route>
   <Route exact path='/ProjectCategory' component={ProjectCategory}></Route>
   <Route exact path='/ProjectContact' component={ProjectContact}></Route>
    <Route exact path='/Projectcbeach' component={ProjectcBeach}></Route>
    <Route exact path='/ProjectcZoo' component={ProjectcZoo}></Route>
    <Route exact path='/ProjectcHeritage' component={ProjectcHeritage}></Route>
    <Route exact path='/ProjectcHills' component={ProjectcHills}></Route>
    <Route exact path='/ProjectcTemple' component={ProjectcTemple}></Route>
    <Route exact path='/ProjectcMuseum' component={ProjectcMuseum}></Route>
    <Route exact path='/ProjectcHotelloc' component={ProjectcHotelloc}></Route>
    <Route exact path='/Hotel' component={Hotel}></Route>
    <Route exact path='/ProjectPayment' component={ProjectPayment}></Route>
    <Route exact path='/ProjectLogin'  component={ProjectLogin}></Route>
    <Route exact path='/Mhotel'  component={Mhotel}></Route>
    <Route exact path='/ProjectPayment' component={ProjectPayment}></Route>
    <Route exact path='/Feedback' component={Feedback}></Route>
  </Switch>
     </div> 
     </Router>

);
}
export default App;
