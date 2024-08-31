import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Profile from '../components/Profile';
import Login from '../components/Login';


const isAuthenticated = () => {
    
    return localStorage.getItem('authToken') !== null;
};


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
               
                <Component {...props} />
            ) : (
                
                <Redirect to="/login" />
            )
        }
    />
);

const ProtectedRoutes = () => (
    <Router>
        <div>
            <Switch>
                
                <Route path="/login" component={Login} />
                
                <PrivateRoute path="/profile" component={Profile} />
                
                <Route path="/">
                    <h2>Home</h2>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default ProtectedRoutes;