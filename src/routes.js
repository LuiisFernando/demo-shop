import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Checkout from './pages/Checkout';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Checkout} /> 
            </Switch>
        </BrowserRouter>
    );
}
