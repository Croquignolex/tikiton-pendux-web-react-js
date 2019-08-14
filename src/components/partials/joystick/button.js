import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    // static defaultProps = {}
    static propTypes = {
      letter: PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        isGuessed: PropTypes.bool
      }).isRequired
    }

    constructor(props)  { 
      super(props)
      this.handleGuessLetter = this.handleGuessLetter.bind(this) 
    }

    handleGuessLetter() {
      this.props.guessLetter(this.props.letter.id)
    }

    render() {  
        const {isGuessed} = this.props.letter 
        const buttonStyle = isGuessed 
          ? 'btn btn-secondary m-1' 
          : 'btn btn-primary m-1'

        return (
          <button type="button" className={buttonStyle} disabled={isGuessed}
            onClick={this.handleGuessLetter}>
              {this.props.letter.value.toUpperCase()}
          </button> 
        );
    }
}

export default Button;