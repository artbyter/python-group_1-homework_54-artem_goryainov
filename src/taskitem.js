import React from 'react'
import './taskitem.css'

class TaskItem extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className="row taskitem">
                    <div className="col-10 align-bottom">
                        <div className="">
                            <p>
                                {this.props.text}
                            </p>
                        </div>
                    </div>
                    <div className="col-2 align-bottom ">

                        <p className="d-inline-block p-2">Удалить<a className="" href="#"
                                                                    onClick={this.props.deleteTask}> <img
                            className="rounded mx-auto d-inline-block  border border-dark" width="32" height="32"
                            src={this.props.trash}></img></a></p>
                        <label htmlFor="done" className="p-2">Сделано </label><input id="done"
                                                                                     type="checkbox"
                                                                                     onChange={this.props.checkboxChange}
                                                                                     checked={this.props.isFinished}></input>

                    </div>
                </div>
            </div>)

    }
}

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };


    }

    render() {
        return (
            <form>
                <input type='text' value={this.props.text} onChange={this.props.onChange}></input>
                <button type='submit' value='submit' onClick={this.props.onClick}>Добавить</button>
            </form>
        )
    }
}

export {TaskItem, AddTaskForm}