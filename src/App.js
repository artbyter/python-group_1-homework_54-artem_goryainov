import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TaskItem, AddTaskForm} from './taskitem.js'
import trash from './trash-e.png'


class App extends Component {
    constructor(props) {
        super();
        this.next_id = 4
    }

    state = {
        tasks: [{id: 1, text: 'Выгулять кота', isFinished: false},
            {id: 2, text: 'Покормить кота', isFinished: false},
            {id: 3, text: 'Снять кота с занавески', isFinished: true},
        ],
        current_task: '',

    };


    checkboxChange = (event, id) => {
        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        let task = this.state.tasks[taskId]
        let tasks = [...this.state.tasks]
        task['isFinished'] = !task['isFinished']
        tasks[taskId] = task
        this.setState({...this.state, tasks})


    };

    textChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        this.setState({current_task: value})

    };

    submitTask = (event) => {
        event.preventDefault();

        let task = {};
        task.text = this.state.current_task;
        task.id = this.next_id;
        this.next_id++;
        task.isFinished = false;
        let tasks = [...this.state.tasks, task];
        this.setState({
            ...this.state,
            tasks,
            current_task: '',
        });

    };

    deleteTask = (id) => {

        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({
            ...this.state,
            tasks
        });
    }

    render() {

        return (
            <div className="App">
                < AddTaskForm onChange={this.textChange} onClick={this.submitTask}/>
                {this.state.tasks.map((task) => {
                    return (<TaskItem key={task.id}
                                      text={task.text}
                                      trash={trash}
                                      checkboxChange={(event) => this.checkboxChange(event, task.id)}
                                      deleteTask={()=>this.deleteTask(task.id)}
                                      isFinished={task.isFinished ? 'checked' : ''}/>)
                })}

            </div>
        );
    }
}

export default App;
