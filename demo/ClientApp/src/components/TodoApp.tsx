import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as TodoAppStore from '../store/TodoApp';

type TodoAppProps =
    TodoAppStore.TodoAppState &
    typeof TodoAppStore.actionCreators &
    RouteComponentProps<{}>;

class TodoApp extends React.PureComponent<TodoAppProps>{

    public render() {
        return (
            <React.Fragment>
                <h1>Todo App</h1>
                <div className="input-group mb-2">
                    <input type="text" className="form-control" value={this.props.Input} onChange={(ev) => this.props.updateInput(ev.target.value)} />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => { this.props.addTask(); }}>Add</button>
                    </div>
                </div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>TASK</th>
                            <th></th> {/*ボタンを置くだけなので、スルー*/}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (typeof (this.props.Tasks) !== undefined) ?
                            this.props.Tasks.map((task: TodoAppStore.Task) =>
                                <tr key={task.ID}>
                                    <td>{task.TaskName}</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-dark btn-sm">DONE</button>
                                    </td>
                                </tr>)
                            :
                            <tr>
                                <td> No Task</td>
                                <td></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.todoApp,
    TodoAppStore.actionCreators
)(TodoApp);
