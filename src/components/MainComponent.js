import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Library from './LibraryComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSnippets } from '../redux/ActionCreators/snippetsActions';
import { fetchTags } from '../redux/ActionCreators/tagsActions';
import { loginUser, logoutUser } from '../redux/ActionCreators/loginUserActions';
import { actions } from 'react-redux-form';
import Dashboard from './DashboardComponent';

const mapStateToProps = state => {
    return {
        snippets: state.snippets,
        availableTags: state.availableTags,
        loggedUser: state.loggedUser
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSnippets: () => {dispatch(fetchSnippets())},
    fetchTags: () => {dispatch(fetchTags())},
    resetLoginForm: () => { dispatch(actions.reset('login'))},
    loginUser: (email, password) => {dispatch(loginUser(email, password))},
    logoutUser: () => {dispatch(logoutUser())}
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchSnippets();
        this.props.fetchTags();
    }

    render() {

        return(
            <div>
                <Header resetLoginForm={this.props.resetLoginForm} loginUser={this.props.loginUser} loggedUser={this.props.loggedUser} logoutUser={this.props.logoutUser} />
                <Switch>
                    <Route exact path="/dashboard" component={() => <Dashboard availableTags={this.props.availableTags} loggedUser={this.props.loggedUser} />}></Route>
                    <Route exact path="/home" component={() => <Home snippets={this.props.snippets}/>}></Route>
                    <Route exact path="/library" component={() => <Library snippets={this.props.snippets} availableTags={this.props.availableTags}/>}></Route>
                    <Route exact path="/about" component={() => <About />}></Route>
                    <Route exact path="/" component={() => <Home snippets={this.props.snippets}/>}></Route>
                    <Redirect to="home"/>
                </Switch>                
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));