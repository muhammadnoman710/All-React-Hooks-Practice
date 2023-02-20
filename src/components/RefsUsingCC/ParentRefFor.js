import React, { Component } from 'react'
import ChildRefFor from './ChildRefFor';

class ParentRefFor extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    handleClick = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <ChildRefFor ref={this.inputRef} />
                <button onClick={this.handleClick}>Click to focus</button>
            </div>
        )

    }
}

export default ParentRefFor