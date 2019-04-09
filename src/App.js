import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import DashboardComponent from './components/dashboard/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={DashboardComponent} />
          {/* <Route path="/SignUp" component={SignUp} /> */}
        </div>
      </Router>
    );
  }
}

export default App;






// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'Noman',
//       fatherName: 'Aamir',
//       flag: false
//     }
//   }
//   changeName() {
//     this.setState({ flag: !this.state.flag })
//     console.log('helllo', this.state.flag)
//   }
//   render() {
//     return (
//       <div className="App">
//         <div>
//           <span className={this.state.flag ? this.state.name.toLowerCase() : this.state.fatherName.toLowerCase()}>
//             {this.state.flag ? this.state.name : this.state.fatherName}
//           </span>
//         </div>
//         <button onClick={() => this.changeName()}>
//           Click me
//         </button>

//       </div>
//     );
//   }
// }

// export default App;