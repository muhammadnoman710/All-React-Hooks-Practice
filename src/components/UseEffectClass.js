import React, { Component } from 'react'

class UseEffectClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ""
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Updating doc title")
        if (prevState.count !== this.state.count)
            document.title = `Clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.name}
                    onChange={e => { this.setState({ name: e.target.value }) }}
                />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}> Click {this.state.count}</button>
            </div>
        )
    }
}

export default UseEffectClass