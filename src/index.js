import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './store/reducer'
import React from 'react'
import {render} from 'react-dom'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const app = <Provider store={store}><App/></Provider>

render(app, document.getElementById('root'))
