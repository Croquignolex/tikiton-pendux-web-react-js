import React from 'react'
import ReactDOM from 'react-dom'

//TODO: Replace bootstrap and font-awesome by react-... components
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Master from './pages/master'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Master />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//TODO: Add Redux architecture
//TODO: Pop modal to confirm reset
//TODO: Pop a success message when the target is reached