import React, { Component } from 'react';
import WORDS from '../data/words'
import LETTERS from '../data/letters'
import Control from './partials/control'
import Display from './partials/display/panel'
import Joystick from './partials/joystick/panel'
import Score from './partials/score'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

// import PropTypes from 'prop-types'

class Master extends Component {
    // static defaultProps = {}
    // static propTypes = {}

    constructor(props) {
        super(props); 
        this.state = {
            point: 0,
            words: WORDS,
            letters: LETTERS, 
            hiddenWordAsArray: this.shuffleWordArray()
        }
        this.guessLetter = this.guessLetter.bind(this)
        this.shuffleWord = this.shuffleWord.bind(this)
    }

    guessLetter(_id) {
        this.setState(oldState => {
            let guessLetter = ''; let isGuessed = false; let isAllGuessed = true
            oldState.letters.map(_letter => {
                if(_letter.id === _id) {
                    _letter.isGuessed = true
                    guessLetter = _letter.value
                } 
                return _letter
            })

            oldState.hiddenWordAsArray.map(_letter => {
                if(_letter.value === guessLetter) {
                    _letter.isGuessed = true
                    isGuessed = true
                }
                 if(!_letter.isGuessed) isAllGuessed = false
                return _letter
            })
            isGuessed ? (oldState.point += 2) : (oldState.point -= 1)
            if(isAllGuessed) {
                oldState.letters.map(_letter => _letter.isGuessed = true) 
            }
            
            return oldState;
        })
    }

    shuffleWord() {
        this.setState(oldState => {
            oldState.letters.map(_letter => _letter.isGuessed = false) 
            oldState.hiddenWordAsArray = this.shuffleWordArray()
            oldState.point = 0
            return oldState;
        })
        toast.info("This is a new word, Good luck", {position: toast.POSITION.TOP_LEFT})
    }

    render() {  
        const {hiddenWordAsArray, letters, point} = this.state
        
        return (
            <div className="container mt-5"> 
                <ToastContainer autoClose={5000}/>
                <div className="row"> 
                    <div className="col-4 offset-4 mb-3">
                        <Control shuffleWord={this.shuffleWord}/>
                    </div>
                    <div className="col-4 offset-4 border border-primary p-2 mb-4">
                        <Score point={point}/>
                    </div>
                    <div className="col-12 border border-primary pt-5 pb-5 mb-5">
                        <Display arrayWord={hiddenWordAsArray}/>
                    </div>
                    <div className="col-6 offset-3 border border-primary p-2">
                        <Joystick letters={letters} guessLetter={this.guessLetter}/>
                    </div>
                    
                </div>
            </div>   
        );
    }

    shuffleWordArray() {
        const randomHiddenWord = WORDS[Math.floor(Math.random()*WORDS.length)]
        return [...randomHiddenWord].map(
            (_letter, _index) => ({id: _index, value: _letter, isGuessed: false})
        )
    }
}

export default Master;