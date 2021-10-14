import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import HeaderMainContainer from './pages/header/headerMainContainer';
import HomeMainContainer from './pages/home/containers/homeMainContainer';
import LoginMainConatiner from './pages/login/container/loginMainContainer';
import TradersMainContainer from './pages/traders/containers/tradersMainContainer';
import SignupMainConatiner from './pages/signup/container/signupContainer';
import FooterContainer from './pages/footer/footerContainer';
import TraderProfileContainer from './pages/traders/containers/traderProfileContainer';
import TraderViewProfileContainer from './pages/traders/containers/traderViewProfileContainer';
import AdminReviewContainer from './pages/admin/containers/adminReviewContainer';
import AdminReviewCustomerContainer from './pages/admin/containers/adminReviewCustomerContainer';
import AdminReviewTraderContainer from './pages/admin/containers/adminReviewTraderContainer'

function App() {
  return (
    <div className="App main-panel">
      <HashRouter>
        <HeaderMainContainer/>
        <Switch>
          <Route path="/home" component={HomeMainContainer} />
          <Route path="/login" component={LoginMainConatiner} />
          <Route path="/traders" component={TradersMainContainer} />
          <Route path="/signup" component={SignupMainConatiner} />
          <Route path="/profile" component={TraderProfileContainer} />
          <Route path="/viewprofile" component={TraderViewProfileContainer} />
          <Route path="/reviewrating" component={AdminReviewContainer} />
          <Route path="/reviewTraders" component={AdminReviewTraderContainer} />
          <Route path="/customers" component={AdminReviewCustomerContainer} />
          <Redirect to='/login' />
        </Switch>
        <FooterContainer/>
      </HashRouter>
    </div>
  );
}

export default App;
