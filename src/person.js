import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="person">

                {/*state props practice */}
                <h1>{this.props.name}</h1>

                {/* received function as a props in p tag below */}
                <p onClick={this.props.passFunction}>{this.props.age}</p>

                {/* use children props below*/}
                <p>{this.props.children}</p>

                {/* two way binding */}
                <input type="text" onChange={this.props.passFunctionTwoWayBind} />
            </div>
        );
    }
}

export default Person;