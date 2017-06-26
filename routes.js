
import React from 'react'
import { Route,IndexRoute } from 'react-router'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="contact" component={Contact} />
        <Route path="about" component={About} />
        <Route path="*" component={notFound} />
    </Route>
);
