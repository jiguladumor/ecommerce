import './App.css';
import {Route,Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import About from './container/About/About';
import Blog from './container/Blog/Blog';
import Shope from './container/Shope/Shope';
import Login from './container/Login/Login';
import Category_admin from './container/Admin/Category_admin'



function App() {
  return (
    <div className="App">
     <Header/>
      <Switch> 
        <Route exact path={"/Home"} component={Home} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Blog"} component={Blog} />
        <Route exact path={"/Shope"} component={Shope} />
        <Route exact path={"/Login"} component={Login} />
        <Route exact path={"/Category_admin"} component={Category_admin} />
       </Switch>
      <Footer />
    </div>
  );
}

export default App;
