import React, { Component } from 'react';
import WORDS from '../data/words'
import LETTERS from '../data/letters'
import Control from './partials/control'
import Display from './partials/display/panel'
import Joystick from './partials/joystick/panel'
import Score from './partials/score'
// import PropTypes from 'prop-types'

class Master extends Component {
    // static defaultProps = {}
    // static propTypes = {}

    constructor(props) {
        super(props);

        const randomHiddenWord = WORDS[Math.floor(Math.random()*WORDS.length)]
        const randomHiddenWordAsArray = [...randomHiddenWord].map(
            (_letter, _index) => ({id: _index, value: _letter, isGuessed: false})
        )

        this.state = {
            words: WORDS,
            letters: LETTERS, 
            hiddenWordAsArray: randomHiddenWordAsArray
        }
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
                    <div className="col-12 border border-primary pt-5 pb-5 mb-5">
                        <Display arrayWord={this.state.hiddenWordAsArray}/>
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