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

    // constructor(props) { super(props); }

    render() {  
        const {value, isGuessed} = this.props.letter
        const buttonStyle = isGuessed 
            ? 'btn btn-success m-1 p-3' 
            : 'btn btn-outline-secondary m-1 p-3'

        return (
            <button type="button" className={buttonStyle} style={{borderRadius: 0}}>
                {isGuessed ? value.toUpperCase() : '-'}
            </button>
        );
    }
}

export default Zone;