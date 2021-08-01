import React, { Component } from 'react';
/**Đầu tiên, để xử lý router, cần  import  thư viện vào
 */
import {
    Switch,
    Route
} from "react-router-dom";

import FQADemo2 from '../qaConnectToNodejs/FQADemo2';

class RouterDemo2 extends Component {
    render() {
        return (    
            <div>
                {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
                */}
                <Switch>    {/**route đến các page cần thiết */}
                    <Route path="/demo2/fqa"> <FQADemo2 /> </Route>
                    <Route path="/"> <FQADemo2 /> </Route>
                </Switch>
            </div>  /**cuối cùng thì truyền RouterDemo2 này vào App.js */
        );
    }
}

export default RouterDemo2;
                   
 