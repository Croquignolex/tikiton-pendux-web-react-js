import React, { Component } from 'react'; 
import PropTypes from 'prop-types'

class Score extends Component {
    // static defaultProps = {}
    static propTypes = {
        points: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired
    }

    // constructor(props) { super(props); }

    render() {  
        const {points, color} = this.props
        
        return (
            <div className="text-center row">
                <div className="col"> 
                    <h4 className={color}>{points}</h4>
                </div> 
            </div>
        );
    }
}

export default Score;