import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Library from './LibraryComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SNIPPETS } from '../shared/test_code_snippets';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            snippets: SNIPPETS
        }
    }

    render() {

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={() => <Home snippets={this.state.snippets}/>}></Route>
                    <Route exact path="/library" component={() => <Library snippets={this.state.snippets}/>}></Route>
                    <Route exact path="/about" component={() => <About />}></Route>
                    <Route exact path="/" component={() => <Home snippets={this.state.snippets}/>}></Route>
                    <Redirect to="home"/>
                </Switch>                
                <Footer />
            </div>
        );
    }
}

export default Main;