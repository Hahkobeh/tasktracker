import React, {Component} from 'react';
import {TaskList} from "./components/TaskList";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: {
        id: 1,
      },
      bodyFilled: false,
      dateFilled: false
    }
  }



  handleChange = (event) => {

    let {name, value} = event.target
    let bodyCheck = this.state.bodyFilled
    let dateCheck = this.state.dateFilled

    if(name === 'body'){
      if(value === ''){
        bodyCheck = false
      }else if(!bodyCheck){
        bodyCheck = true
      }
    }

    if(name === 'date'){

      if(value === ''){
        dateCheck = false
      }else {
        if (!dateCheck) {
          dateCheck = true
        }
        let date = new Date(value)
        console.log(date.getMonth().toString())
        value = date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear()
      }
    }






    this.setState(prevState => ({
      tasks:this.state.tasks,
      newTask: {
        ...prevState.newTask,
        [name]: value
      },
      bodyFilled: bodyCheck,
      dateFilled: dateCheck

    }))

    console.log(this.state)
  }


  handleSubmit = (event) => {

    const tasks = [...this.state.tasks, this.state.newTask]

    this.setState({
      tasks:  tasks,
      newTask: {
        id: this.state.newTask.id + 1
      },
      bodyFilled: false,
      dateFilled: false
    })
    Array.from(document.querySelectorAll('input')).forEach(input => (input.value = ''))


    event.preventDefault()


  }

  removeItem = (id) => {
    console.log(id)
    const tasks = this.state.tasks.filter((element) => element.id !== id)
    console.log(tasks)
    this.setState(prevState => ({
      ...prevState,
      tasks: tasks
    }))

  }

  render() {
    return (
        <TaskList filledCheck={(this.state.bodyFilled && this.state.dateFilled)} submit={this.handleSubmit} change={this.handleChange} data={this.state.tasks} remove={this.removeItem}/>
    )
  }
}


export default App;
