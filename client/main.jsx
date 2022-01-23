import React from "react"
import ReactDOM from 'react-dom'

import './assets/style/style.scss'

import Root from './config/root'

const target = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(<Component />, target)
}

render(Root)