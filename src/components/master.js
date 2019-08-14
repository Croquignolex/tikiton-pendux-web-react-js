import React, { Component } from 'react';
import WORDS from '../data/words'
import LETTERS from '../data/letters'
import Control from '../components/partials/control'
import Display from '../components/partials/display'
import Joystick from '../components/partials/joystick/panel'
import Score from '../components/partials/score'
// import PropTypes from 'prop-types'

class Master extends Component {
    // static defaultProps = {}
    // static propTypes = {}

    constructor(props) {
        super(props);
        this.state = {words: WORDS, letters: LETTERS}
        this.guessLetter = this.guessLetter.bind(this)
    }

    guessLetter(_id) {
        this.setState(oldState => {
            oldState.letters.map(_letter => {
                _letter.id === _id && (_letter.isGuessed = true)
                return _letter
            })
            return oldState;
        })
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
                    <div className="col-6 offset-3 border border-primary p-2">
                        <Joystick letters={this.state.letters} guessLetter={this.guessLetter}/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Master;