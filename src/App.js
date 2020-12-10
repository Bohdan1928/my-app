import React, {Component} from 'react';
import "./App.css"
import AllUsers from "./all/AllUsers";
import AllPosts from "./all/AllPosts";
import AllComments from "./all/AllComments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                 <div className={"button"}>
                     <Link to= {"/users"}>users</Link>
                </div>
                <div className={"button"}>
                    <Link to= {"/posts"}>posts</Link>
                </div>
                <div className={"button"}>
                    <Link to={"/comments"}>comments</Link>
                </div>
                <div className={"app-route"}>
                    <Switch>
                        <Route path={"/users"}>
                            <AllUsers/>
                        </Route>
                        <Route path={"/posts"}>
                            <AllPosts/>
                        </Route>
                        <Route path={"/comments"}>
                            <AllComments/>
                        </Route>
                    </Switch>
                </div>
           </div>
        </Router>
    );
  }
}

export default App;
