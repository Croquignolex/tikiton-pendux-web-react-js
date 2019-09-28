import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Score extends Component {
    render() {  
        const {points, color} = this.props;
        
        return (
            <div className="text-center row">
                <div className="col"> 
                    <h4 className={color}>{points}</h4>
                </div> 
            </div>
        );
    }

    static propTypes = {
        points: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired
    }
}

export default Score;