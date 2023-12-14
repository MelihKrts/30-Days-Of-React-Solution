import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

class MouseCoordinateTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    }
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return (
      <>
        <div style={{ position: "relative", inset: "10px 0 0 10px", backgroundColor: "rgba(255,255,255,0.7)", padding: 10, borderRadius: 5 }}>Coordinates X: {this.state.x}, Y: {this.state.y}</div>

        <div style={{ width: "100%", height: "100vh", border: "1px solid #ddd" }} onMouseMove={this.handleMouseMove}></div>

      </>
    )
  }
}

class MyFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        password: '',
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Perform actions with the form data
    console.log('Form submitted with data:', this.state.formData);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.formData.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.formData.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  }
  handleClick = (e) => {
    this.setState({
      message: "Welcome to the world of events"
    })
  }

  handleDoubleClick = (e) => {
    this.setState({
      message: "Double Clicked"
    })
  }

  handleMouseDown = (e) => {
    this.setState({
      message: "Mouse button pressed!"
    })
  }

  handleMouseUp = (e) => {
    this.setState({
      message: "Mouse button released"
    })
  }

  handleMouseMove = (e) => {
    this.setState({ message: "mouse is moving" });
  }

  handleMouseEnter = (e) => {
    this.setState({ message: "Mouse entered element" })
  }

  handleMouseLeave = (e) => {
    this.setState({ message: "Opposite onMouseEnter event" })
  }

  handleWheel = (e) => {
    this.setState({ message: "Mouse wheel scroll" })
  }

  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

  handleKeyPress = (e) => {
    this.setState({
      message: `${e.target.value} has been pressed and the keycode is` + e.charCode,
    })
  }

  handleBlur = (e) => {
    this.setState({ message: "Input field has been blurred" });
  }

  handleCopy = (e) => {
    this.setState({ message: "Using 30 Days Of React for commercial purpose is not allowed" });
  }

  handleKeyDown = (event) => {
    this.setState({ message: "Key Down: " + event.key });
  };

  handleKeyPress = (e) => {
    this.setState({ message: "Key Pressed: " + e.key })
  }

  handleKeyUp = (e) => {
    this.setState({ message: "Key Up " + e.key })
  }

  handleChange = (e) => {
    this.setState({ message: "Key Press " + event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me </button>

        <button onDoubleClick={this.handleDoubleClick}>Double Click</button>

        <button onMouseDown={this.handleMouseDown}>Mouse Down</button>

        <button onMouseUp={this.handleMouseUp}>Mouse up</button>

        <button onMouseEnter={this.handleMouseEnter}>Mouse Enter</button>

        <button onMouseLeave={this.handleMouseLeave}>Mouse Leave</button>

        <button onWheel={this.handleWheel}>Mouse whell</button>

        <p onCopy={this.handleCopy}>Check copy right permission by copying this text</p>

        <p>{this.state.message}</p>
        <label htmlFor=''>Test for onKeypress Event: </label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor=''>Test for OnBlur Event: </label>
        <input type='text' onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstname'>First Name: </label>
            <input onChange={this.handleChange} name='firstname' value={this.state.value}></input>
          </div>

          <div>
            <input type='submit' value="submit"></input>
          </div>

          <div>
            <input onKeyDown={this.handleKeyDown}></input>
          </div>

          <div>
            <input onKeyPress={this.handleKeyPress}></input>
          </div>

          <div>
            <input onKeyUp={this.handleKeyUp}></input>
          </div>

          <div>
            <input onChange={this.handleChange}></input>
          </div>

        </form>


        <MyFormComponent />

        <MouseCoordinateTracker />

      </div>
    )
  }

}




export default App
