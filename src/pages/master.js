import React, { Component } from 'react';

import WORDS from '../data/words'
import LETTERS from '../data/letters'

import Reset from '../components/partials/reset'
import Score from '../components/partials/score'
import Timer from '../components/partials/timer'
import Display from '../components/partials/display/panel'
import Joystick from '../components/partials/joystick/panel'

import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer, toast } from 'react-toastify'

class Master extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            points: 0,
            timer: 0,
            words: WORDS,
            letters: LETTERS, 
            hiddenWordAsArray: Master.shuffleWordArray()
        };
    }

    componentDidMount() {
        this.initializeTick()
    }

    componentWillUnmount() {
        this.clearTick()
    }

    guessLetter = (_id) => {
        this.setState(_state => {
            let guessLetter = ''; let isGuessed = false; let isAllGuessed = true;
            _state.letters.map(_letter => {
                if(_letter.id === _id) {
                    _letter.isGuessed = true;
                    guessLetter = _letter.value
                } 
                return _letter
            });

            _state.hiddenWordAsArray.map(_letter => {
                if(_letter.value === guessLetter) {
                    _letter.isGuessed = true;
                    isGuessed = true
                }
                if(!_letter.isGuessed) isAllGuessed = false;
                return _letter
            });

            this.resetTick() ;
            isGuessed ? (_state.points += 3) : (_state.points -= 2) ;
            _state.timer = 0;

            if(isAllGuessed) {
                _state.letters.map(_letter => _letter.isGuessed = true) ;
                this.clearTick()
            }
            
            return _state;
        })
    };

    resetGame = () => {
        this.resetTick() ;
        this.setState(_state => {
            _state.letters.map(_letter => _letter.isGuessed = false);
            _state.hiddenWordAsArray = Master.shuffleWordArray();
            _state.points = 0;
            _state.timer = 0;
            return _state
        });
        toast.info("This is a new word, Good luck", {position: toast.POSITION.TOP_RIGHT})
    };

    tick = () => {
        this.setState(_state => {
            if(_state.timer === 10) {
                _state.timer = 0 ;
                _state.points -= 1
            } else _state.timer += 1 ;

            return _state
        })
    };

    render() {
        const {hiddenWordAsArray, letters, points, timer} = this.state;
        const pointsColor = Master.getPointsColor(points);
        const pointBorderStyle = `border border-${pointsColor}`;
        const pointTextStyle = `text-${pointsColor}`;
        
        return (
            <div className="container mt-5"> 
                <ToastContainer autoClose={5000}/>
                <div className="row">
                    <div className="col-12 alert alert-primary text-center" style={{borderRadius: 0}}>PENDUX</div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 mb-4 align-self-start"> 
                        <div className={pointBorderStyle}>
                            <div className="mb-1 pt-2 pb-2">
                                <Reset resetGame={this.resetGame}/>
                            </div>
                            <div className="m-1 pt-2 pb-2">
                                <Timer progression={timer}/>
                            </div>
                            <div className="mt-1 pt-2 pb-2">
                                <Score points={points} color={pointTextStyle}/>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-8 col-xs-12">
                        <div className="border border-primary pt-5 pb-5 pl-2 pr-2 mb-5">
                            <Display arrayWord={hiddenWordAsArray}/>
                        </div>
                        <div className="border border-primary pt-3 pb-3 pl-2 pr-2">
                            <Joystick letters={letters} guessLetter={this.guessLetter}/>
                        </div>
                    </div>
                    <div className="col-12 alert alert-primary text-right mt-3" style={{borderRadius: 0}}>By tikiton P</div>
                </div>
            </div>   
        );
    }

    initializeTick() {
        this.interval = setInterval(() => this.tick(), 1000)
    };

    clearTick() {
        clearInterval(this.interval)
    }

    resetTick() {
        this.clearTick();
        this.initializeTick()
    }

    static shuffleWordArray() {
        const randomHiddenWord = WORDS[Math.floor(Math.random()*WORDS.length)];
        return [...randomHiddenWord].map(
            (_letter, _index) => ({id: _index, value: _letter, isGuessed: false})
        )
    }

    static getPointsColor(_points) {
        if(_points === 0) return 'warning';
        else if(_points < 0) return 'danger';
        else return 'success'
    }
}

export default Master;