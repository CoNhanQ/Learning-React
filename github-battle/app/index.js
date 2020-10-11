import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// Component: Concern about State, Lifecycle and UI.
// State
// Lifecycle - fetch data from API
// UI

class App extends React.Component {
  render() {
    return (
    <div>
     Hello World, Co!
    </div>
  )
  }
}

ReactDOM.render(
  // React Elemnent,
  // Where to render the Element to
  <App />,
  document.getElementById('app')
)
