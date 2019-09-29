import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Reducer } from 'store/reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'


let store = createStore(Reducer, devToolsEnhancer({}))

render(<Provider store={store}><App /></Provider>, document.getElementById('root'))