import React, { Component } from 'react'; 
import Zone from './zone'
import PropTypes from 'prop-types'

class Display extends Component {
    // static defaultProps = {}
    static propTypes = {
        arrayWord: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              value: PropTypes.string.isRequired,
              isGuessed: PropTypes.bool.isRequired
            })
        ).isRequired
    }

    constructor(props) { super(props); }

    render() {  
        const inputs = this.props.arrayWord.map(
            _letter => <Zone key={_letter.id} letter={_letter}/>
        )

        return (
            <div className="text-center mt-5 mb-5">{inputs}</div>
        );
    }
}

export default Display;