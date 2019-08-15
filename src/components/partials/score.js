import React, { Component } from 'react'; 
import PropTypes from 'prop-types'

class Score extends Component {
    // static defaultProps = {}
    static propTypes = {
        point: PropTypes.number.isRequired
    }

    constructor(props) { super(props); }

    render() {  
        return (
            <div>
                Votre scrore est {this.props.point}
            </div>
        );
    }
}

export default Score;