import React from 'react'
import { DContext, MyContext } from '../App'

function Context3() {
    return (
        <div>
            <MyContext.Consumer>
                {
                    user => {
                        return (
                            <DContext.Consumer>{
                                abc => {
                                    return (
                                        <div>Value passed by App: {user}, 2nd Value passed by App: {abc}</div>
                                    )
                                }}

                            </DContext.Consumer>
                        )
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}
export default Context3