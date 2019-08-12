import React, { Component } from 'react';
import WORDS from '../data/words'
import Control from '../components/partials/control'
import Display from '../components/partials/display'
import Joystick from '../components/partials/joystick'
import Score from '../components/partials/score'
// import PropTypes from 'prop-types'

class Master extends Component {
    // static defaultProps = {}
    // static propTypes = {}

    constructor(props) {
        super(props);
        this.state = {words: WORDS}
    }

    render() { 
        return (
            <div className="container mt-5">
                <div className="row"> 
                    <div className="col-4 offset-4 mb-3">
                        <Control />
                    </div>
                    <div className="col-4 offset-4 border border-primary p-2 mb-4">
                        <Score />
                    </div>
                    <div className="col-12 border border-primary p-2 mb-5">
                        <Display />
                    </div>
                    <div className="col-12 border border-primary p-2">
                        <Joystick />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Master;