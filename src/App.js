import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  static propTypes = {
    prop: PropTypes.node.isRequired,
  };

  static defaultProps = {
    prop: 'default value',
  };

  state = {
    value: 'intial state value',
  };

  componentDidMount() {
    // things are fine without an arrow function
  }

  handleAction = () => {
    // but with arrow functions come semi's
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
