import { Action, Reducer } from 'redux';


export interface TodoAppState {
    Input : string,
    Tasks: Task[];
}

export interface Task {
    ID: number,
    TaskName: string;
    TaskStatus: boolean;
}


export interface AddTaskAction { type: 'ADD_TASK_ITEM'}
export interface UpdateInputAction { type: 'UPDATE_INPUT', newTask: string}
export interface DoneTaskAction { type: 'DONE_TASK', ID:number}

export type KnownAction = AddTaskAction | UpdateInputAction | DoneTaskAction;

export const actionCreators = {
    addTask: () => ({ type: 'ADD_TASK_ITEM'} as AddTaskAction),
    updateInput: (newTask: string) => ({ type: 'UPDATE_INPUT', newTask: newTask} as UpdateInputAction),
    doneTask: (id: number) => ({ type: 'DONE_TASK', ID: id} as DoneTaskAction)
};

export const reducer: Reducer<TodoAppState> = (state: TodoAppState | undefined, incomingAction: Action): TodoAppState => {
    if (state === undefined) {
        return {
            Input: "",
            Tasks: new Array()
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'ADD_TASK_ITEM':
            const newTask: string = state.Input;
            return {
                Input: "",
                Tasks: [...state.Tasks, { ID: state.Tasks.length, TaskName: newTask, TaskStatus: true }]
            };
        case "UPDATE_INPUT":
            return {
                Input: action.newTask,
                Tasks: state.Tasks
            };
        case "DONE_TASK":
            const taskIndex = state.Tasks.findIndex(n => n.ID === action.ID);
            state.Tasks[taskIndex].TaskStatus = false;
            return {
                Input: state.Input,
                Tasks: [...state.Tasks]
            };
        default:
            return state;
    }
};
