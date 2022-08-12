import taskList from "../assets/taskList.json";

export interface taskListInterface{
    isChked: boolean;
    title: string;
    registDate: string;
};

export const taskData = taskList;
