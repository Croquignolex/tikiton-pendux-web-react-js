import React, { Component } from 'react'; 
// import PropTypes from 'prop-types'

class Panel extends Component {
    // static defaultProps = {}
    // static propTypes = {}

    constructor(props) { super(props); }

    render() {  
        return (
            <div className="row text-center">
                <div className="col border border-primary p-2 mr-1">
                    <button className="btn btn-outline-primary mr-1" 
                            type="button" title="Shuffle">
                        <i className="fa fa-random"/>
                    </button>
                    <button className="btn btn-outline-danger ml-1" 
                            type="button" title="End">
                        <i className="fa fa-times"/>
                    </button>
                </div>
                <div className="col border border-primary p-2 ml-1"> 
                    <div className="custom-control custom-radio custom-control-inline text-primary mt-2">
                        <input type="radio" id="1-player" name="game-type" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="1-player"> 
                            <i className="fa fa-user"/>
                        </label>
                    </div>  
                    <div className="custom-control custom-radio custom-control-inline text-primary mt-2" title="2 players">
                        <input type="radio" id="2-players" name="game-type" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="2-players"> 
                            <i className="fa fa-users"/>
                        </label>
                    </div> 
                </div> 
            </div>
        );
    }
}

export default Panel;