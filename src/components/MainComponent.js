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

const mapStateToProps = state => {
    return {
        snippets: state.snippets,
        availableTags: state.availableTags
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSnippets: () => {dispatch(fetchSnippets())},
    fetchTags: () => {dispatch(fetchTags())}
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchSnippets();
        this.props.fetchTags();
    }

    render() {

        return(
            <div>
                <Header />
                <Switch>
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