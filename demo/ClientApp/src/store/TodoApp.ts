import { Action, Reducer } from 'redux';


export interface TodoAppState {
    Tasks: Task[];
}

export interface Task {
    ID: number,
    TaskName: string;
    TaskStatus: boolean;
}

const defaultTask = (): Task => ({
    ID: 0,
    TaskName: 'default',
    TaskStatus: false
});


export interface AddTaskAction { type: 'ADD_TASK_ITEM' }

export type KnownAction = AddTaskAction;

export const actionCreators = {
    addTask: () => ({ type: 'ADD_TASK_ITEM' } as AddTaskAction)
};

export const reducer: Reducer<TodoAppState> = (state: TodoAppState | undefined, incomingAction: Action): TodoAppState => {
    if (state === undefined) {
        return {
            Tasks: new Array()
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'ADD_TASK_ITEM':
            return { Tasks: [...state.Tasks, defaultTask()] };
        default:
            return state;
    }
};
