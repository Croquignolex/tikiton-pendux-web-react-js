import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Button extends Component {
    handleGuessLetter(id) {
      this.props.guessLetter(id)
    }

    render() {  
        const {isGuessed, id} = this.props.letter;
        const buttonStyle = isGuessed 
          ? 'btn btn-secondary m-1' 
          : 'btn btn-primary m-1';

        return (
          <button type="button" className={buttonStyle} disabled={isGuessed}
            onClick={() => this.handleGuessLetter(id)} style={{borderRadius: 0}}>
              {this.props.letter.value.toUpperCase()}
          </button> 
        );
    }

    static propTypes = {
        letter: PropTypes.shape({
            id: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired,
            isGuessed: PropTypes.bool.isRequired
        }).isRequired,
        guessLetter: PropTypes.func.isRequired
    }
}

export default Button;