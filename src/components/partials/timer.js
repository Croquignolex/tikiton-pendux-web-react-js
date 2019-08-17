import React, { Component } from 'react'; 
import PropTypes from 'prop-types'

class Timer extends Component {
    // static defaultProps = {}
    static propTypes = {
        progression: PropTypes.number.isRequired
    }

    // constructor(props) { super(props); }
  
    render() {  
        const {progression} = this.props
        const progressbarStyle = {width: `${progression * 10}%`}

        let progressbarColor = ''
        if(progression >= 9) progressbarColor = "progress-bar bg-danger"
        else if(progression >= 7) progressbarColor = "progress-bar bg-warning"
        else progressbarColor = "progress-bar bg-success"

        return (
            <div className="row text-center">
                <div className="col">
                    <div className="progress">
                        <div className={progressbarColor}  role="progressbar" 
                            style={progressbarStyle} aria-valuenow={progression} 
                            aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;