import React, { Component } from 'react';
import './App.css';
import Person from './person';
import { whileStatement } from '@babel/types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { name: "asif", age: "15" },
        { name: "sana", age: "55" },
        { name: "jaweria", age: "17" }
      ],
      showPerson: false
    }
  }
  render() {

    // inline css declare
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }

    {/* use condition using if conditional rendering ( convinient tariqa )*/ }
    let person = null;
    if (this.state.showPerson) {
      person = (
        <Person name="khuram" age="50">check condition via if</Person>
      )
    }

    return (
      <div className="App">
        {/* use condition using if ( convinient tariqa )*/}
        <button onClick={this.toggleBtn}>check condition if</button>
        {person}

        {/* use condition if by using turnery*/}
        <button onClick={this.toggleBtn}>check condition turnery</button>
        {
          this.state.showPerson ?
            <Person name="asif" age="50">check condition turnery</Person> : null
        }


        {/* props practice */}
        <Person name="Farrukh" age="22" />
        <Person name="Ali" age="24"></Person>
        {/* used children props below im hafez e quran  */}
        <Person name="shahmir" age="15">I am hafiz e quran</Person>
        {/* pass function in props below */}
        <Person passFunction={this.nameChanged} name="Farrukh" age="22" />
        {/* pass function as a props for two way binding below im hafez e quran  */}
        <Person passFunctionTwoWayBind={this.twoWayBinding} name="shahmir" age="15">I am engineer</Person>

        {/* state props */}
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />


        {/* list rendering of obj of array */}
        {this.state.person.map((item, index) => {
          return <Person click={() => this.removeList(index)} name={item.name} age={item.age} />
          {/* child </Person> */ }
        })}

        {/* // set state and event handler method below we dont call method by parenthesis nameChanged() */}
        <button onClick={this.nameChanged}>change name</button>

        {/* // set state and event handler method below we call method by parenthesis with passing arrguments nameChanged() */}
        {/* inconvinient tariqa */}
        <button onClick={() => this.ageChanged("10")}>change age arrow function method</button>
        {/* convinient tariqa    &&    inline css use  */}
        <button style={btnStyle} onClick={this.ageChanged.bind(this, "12")}>change age bind method</button>
      </div>
    );
  }

  // remove list
  removeList = (personIndex) => {
    const person = this.state.person;
    person.splice(personIndex, 1)
    this.setState({
      person: person
    })
  }

  // condition set 
  toggleBtn = () => {
    const isShow = this.state.showPerson;
    this.setState({
      showPerson: !isShow
    })
  }

  // set state and event handler method with arrument below
  ageChanged = (age) => {
    this.setState({
      person: [
        { name: "anie", age: age },
        { name: "sana", age: "55" },
        { name: "jaweria", age: "29" }
      ]
    })
  }

  twoWayBinding = (event) => {
    this.setState({
      person: [
        { name: event.target.value, age: "15" },
        { name: event.target.value, age: "55" },
        { name: "jaweria", age: "17" }
      ]
    })
  }

  // set state and event handler method below
  nameChanged = () => {
    this.setState({
      person: [
        { name: "jia farrukh", age: "15" },
        { name: "sana", age: "55" },
        { name: "jaweria", age: "29" }
      ]
    })
  }

}






export default App;
