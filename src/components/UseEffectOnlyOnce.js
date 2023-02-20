import React, { Component } from 'react'

export default class UseEffectOnlyOnce extends Component {

    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    mousePosition = e => {
        console.log("still going")
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {

        window.addEventListener("mousemove", this.mousePosition)
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove", this.mousePosition)
    }

    render() {
        return (
            <div>
                X - {this.state.x} Y- {this.state.y}
            </div>
        )
    }
}
