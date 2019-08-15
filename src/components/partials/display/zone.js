import React, { Component } from 'react'; 
import PropTypes from 'prop-types'
import '../../../index.css'

class Zone extends Component {
    // static defaultProps = {}

    static propTypes = {
        letter: PropTypes.shape({
            id: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired,
            isGuessed: PropTypes.bool.isRequired
        }).isRequired
    }

    constructor(props) { super(props); }

    render() {  
        const {value, isGuessed} = this.props.letter
        const buttonStyle = isGuessed 
            ? 'btn btn-lg btn-outline-success mr-1 ml-1' 
            : 'btn btn-lg btn-outline-secondary m-1 ml-1'

        return (
            <button type="button" className={buttonStyle} disabled>
                {isGuessed && value}
            </button>
        );
    }
}

export default Zone;