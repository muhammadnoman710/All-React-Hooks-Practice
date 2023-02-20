import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    IncrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }

        }
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.IncrementCount}>Count{this.state.count}</button>
            </div>
        )
    }
}

export default Counter