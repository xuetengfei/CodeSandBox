import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      count: 1,
    };
  }

  // this.checkAge is passed as the callback to setState
  updateAge = value => {
    this.setState({ age: value }, () => this.checkAge(value));
  };

  checkAge = num => {
    console.log('num: ', num);
    const { age } = this.state;
    if (age !== 0 && age >= 21) {
      // Make API call to /beer
      console.log('Make API call to /beer: ');
    } else {
      // Throw error 404, beer not found
    }
  };

  add = () => {
    const { count: preCount } = this.state;
    console.log('preCount1: ', preCount);
    this.setState({ count: preCount + 1 });
    console.log('preCount2: ', preCount);
    this.setState({ count: preCount + 1 });
    console.log('preCount3: ', preCount);
    setTimeout(() => {
      console.log('preCount4: ', preCount);
      this.setState({ count: preCount + 1 });
      console.log('preCount5: ', preCount);
      console.log('preCount6: ', preCount);
      this.setState({ count: preCount + 1 });
      console.log('preCount7: ', preCount);
    }, 300);
    this.setState({ count: preCount + 1 });
    console.log('preCount8: ', preCount);
    //  打印都是1
  };

  render() {
    const { age, count } = this.state;
    return (
      <div>
        <p>Drinking Age Checker</p>
        <input type="number" value={age} onChange={e => this.updateAge(e.target.value)} />
        <br />
        <br />
        <p>{count}</p>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

export default App;
