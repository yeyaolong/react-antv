import React, { Component } from 'react'
import Sidebar from './components/sidebar/sidebar'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div id="app">
                <div className="sidebar-container">
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default App