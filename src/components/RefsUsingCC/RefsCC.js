import React, { Component } from 'react'

class RefsCC extends Component {
    constructor(props) {
        super(props)
        this.input = React.createRef();
    }

    componentDidMount() {
        this.input.current.focus()
        console.log(this.input)
    }

    handleClick = () => {
        alert(this.input.current.value)
    }


    render() {
        return (
            <div>
                <input type="text" ref={this.input}></input>
                <button onClick={this.handleClick}>CLICK</button>
            </div>
        )
    }
}
export default RefsCC 