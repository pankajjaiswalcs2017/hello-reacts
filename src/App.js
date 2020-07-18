import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header  from './header/header';
import Footer from './footer/footer';
import InstagramFeed from './instagramFeed/instagramfeed';
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import Root from './Root/Root'
import InstaPost from './InstaPost/InstaPost'
import BrowserRouter from 'react-router-dom/BrowserRouter'


function App() {
  return (
    <div className="App">
     {/* <Header/>
     <InstagramFeed/>
     <Footer/> */}
     <Router history={browserHistory}>
       <Route path={"/hello-reacts"} component={Root}>
         <IndexRoute component={Root} />
       <Route path={'/login'} component={InstagramFeed}/>
       <Route path={'/post'} component={InstaPost} />
       </Route>
       </Router>
    </div>
    
  );
}

export default App;
