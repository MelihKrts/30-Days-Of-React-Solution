import React from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // class RandomPositionButton extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       position: { top: 0, left: 0 },
  //       containerWidth: window.innerWidth,
  //       containerHeight: window.innerHeight,
  //     };
  //   }

  //   handleMouseEnter = () => {
  //     const { containerWidth, containerHeight } = this.state;

  //     const randomTop = Math.floor(Math.random() * containerHeight);
  //     const randomLeft = Math.floor(Math.random() * containerWidth);

  //     this.setState({ position: { top: randomTop, left: randomLeft } });
  //   };

  //   render() {
  //     const { position } = this.state;

  //     return (
  //       <div style={{
  //         position: 'relative',
  //         width: '1140px', // Eğer button geniş bir container içinde olacaksa, bu satırı kaldırabilirsiniz
  //         height: '500px',
  //         backgroundColor: "yellow",
  //         margin: 'auto',
  //       }}>
  //         <div>
  //           <button
  //             onMouseEnter={this.handleMouseEnter}
  //             style={{
  //               position: 'absolute',
  //               top: position.top,
  //               left: position.left,
  //               width: '50px', // Örneğin, sabit bir genişlik ekleyebilirsiniz
  //             }}
  //           >
  //             Hover me for random position!
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   }
  // }

  class RandomPositionButton extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        position: { top: 0, left: 0 },
      };
    }
  
    handleMouseEnter = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
  
      const randomTop = Math.floor(Math.random() * containerHeight);
      const randomLeft = Math.floor(Math.random() * containerWidth);
  
      this.setState({ position: { top: randomTop, left: randomLeft } });
    };
  
    render() {
      const { position } = this.state;
  
      return (
        <div
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
          }}
        >
          <button
            onMouseEnter={this.handleMouseEnter}
            style={{
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            Hover me for random position!
          </button>
        </div>
      );
    }
  }
  



  return (
    <>
      <RandomPositionButton />
    </>
  )
}

export default App
