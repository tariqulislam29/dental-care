import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Footer from './shared/Footer/Footer';
import Menu from './shared/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display/Display";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/Login/Login";
import Services from "./components/Services/Services";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Doctors from "./components/Doctors/Doctors";
import Contact from "./components/Contact/Contact";
import Appointment from "./components/Appointment/Appointment";
import PageNot from "./components/PageNot/PageNot";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Menu></Menu>

          <Switch>
            <Route exact path="/
          ">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/display/:serviceKey">
              <Display></Display>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNot></PageNot>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>


    </div>
  );
}

export default App;
