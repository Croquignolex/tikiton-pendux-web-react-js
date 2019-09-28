import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Reset extends Component {
    handleResetGame() {
        this.props.resetGame()
    }

    render() {  
        return (
            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-outline-danger" 
                            type="button" title="Reset" style={{borderRadius: 0}}
                            onClick={() => this.handleResetGame()}>
                        <i className="fa fa-repeat"/>
                    </button>
                </div>
            </div>
        );
    }

    static propTypes = {
        resetGame: PropTypes.func.isRequired
    }
}

export default Reset;