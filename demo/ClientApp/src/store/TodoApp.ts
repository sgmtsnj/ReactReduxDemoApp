// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface TodoAppState {
    Tasks: Task[];
}

export interface Task {
    TaskName: string;
    TaskStatus: boolean;
}
