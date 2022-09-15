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
import Product_admin from './container/Admin/Product_admin';
import { Provider } from 'react-redux';
import { store } from './container/redux/Store';



function App() {

  return (
    <div className="App">
     <Header/>
     <Provider store={store}>
      <Switch> 
        <Route exact path={"/Home"} component={Home} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Blog"} component={Blog} />
        <Route exact path={"/Shope"} component={Shope} />
        <Route exact path={"/Login"} component={Login} />
        <Route exact path={"/Category_admin"} component={Category_admin} />
        <Route exact path={"/Product_admin"} component={Product_admin} />
       </Switch>
     </Provider>
      <Footer />
    </div>
  );
}

export default App;
