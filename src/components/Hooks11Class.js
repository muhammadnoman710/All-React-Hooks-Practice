import React, { Component } from 'react'

class Hooks11Class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    tick = () => {
        this.setState({ count: this.state.count + 1 })
        console.log('mo')
    }
    componentDidMount() {
        this.Interval = setInterval(this.tick, 1000)
        console.log("wow")
    }

    componentWillUnmount() {
        clearInterval(this.Interval)
    }

    render() {
        return (
            <div>
                {this.state.count}

            </div>
        )
    }
}


export default Hooks11Class