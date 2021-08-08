import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import tasks from './bd/task.json';
import FormC from './form';
import NavC from './nav';
import List from './list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.addTask(this.state.task, this.state.description);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTask = (task, description) => {
    const newTask = {
      task: task,
      description: description,
      id: this.state.tasks.length,
    };

    this.setState({
      tasks: [newTask, ...this.state.tasks],
    });

    console.log(newTask);
  };

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: [...newTasks],
    });
  };

  editTask = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div>
        <NavC />
        <Container
          className="mt-4 rounded"
          fluid="md"
          style={{ backgroundColor: '#ccc' }}
        >
          <Row>
            <Col md={4}>
              <FormC
                state={this.state}
                click={this.handlerClick}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
              />
            </Col>
            <Col>
              <Container className="p-3">
                <h1 className="text-white">To Do List</h1>
                <hr className="text-white"></hr>
                {this.state.tasks.map((e) => (
                  <List
                    task={e.task}
                    description={e.description}
                    id={e.id}
                    clickToDelete={this.deleteTask.bind(this, e.id)}
                    clickToEdit={this.editTask.bind(this, e.id)}
                  />
                ))}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
