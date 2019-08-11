import React, { Component } from 'react';
import WORDS from '../data/words'
// import PropTypes from 'prop-types'

class Master extends Component {
    // static defaultProps = {}
    // static propTypes = {}

    constructor() {
        super();
        this.state = {words: WORDS}
    }

    render() { 
        console.log('This are the available words', this.state.words)
        return (<div></div>);
    }
}

export default Master;