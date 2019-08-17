import React, { Component } from 'react'; 
import PropTypes from 'prop-types'

class Reset extends Component {
    // static defaultProps = {}
    static propTypes = {
        resetGame: PropTypes.func.isRequired
    }

    // constructor(props) { super(props); }
  
    render() {  
        return (
            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-outline-danger" 
                            type="button" title="Reset" style={{borderRadius: 0}}
                            onClick={this.props.resetGame}>
                        <i className="fa fa-repeat"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Reset;