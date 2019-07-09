import React, { render } from 'react'
import ReactDom from 'react-dom'
import App from './app'

let dom = document.getElementById('app-container')

ReactDom.render(
    <App />,
    dom
)