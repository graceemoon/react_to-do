import React     from 'react';
import Nav       from '../Nav/Nav';
import TaskForm  from '../TaskForm';
import Footer    from '../Footer/Footer';
import TaskList  from '../TaskList';

import './App.css';
import './GA_gear.png';


class Task{
  constructor(name, desc){
    this.name = name;
    this.desc = desc;
  }
}


export default class App extends React.Component {

  constructor(props) {
    super();

    this.state = {
      tasks: {},
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(name, desc) {

    ajax
    .post(newTask)
    .then(data => {
      const task = new Task(data);
      const newState = { ...this.state.tasks};
      newState.push(task);
      this.setState({tasks: newState});
    })
    // const newState = {...this.state.tasks};
    //go to the DB - POST to the DB, this anme and desc
    //.then update the state
    console.log(arguments);
    // this.setState({tasks:newState})
  }

  render() {
    return (
      <container>
        <header>
          <Nav />
        </header>
        <main className="container">
          <section className="jumbotron">
            <h1>Task Manager</h1>
            <TaskForm addTask={this.addTask} />
          </section>

          {/* to do lists */}
          <section className="row">
            <article className="col-md-4">
              <h3>Open Items</h3>
              <TaskList />
            </article>

            <article className="col-md-4">
              <h3>Completed Items</h3>
              <TaskList />
            </article>

            <article className="col-md-4">
              <h3>Deleted Items</h3>
              <TaskList />
            </article>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>

      </container>
    );
  }

}
