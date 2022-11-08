import { ArchivedTask } from "../archived-task/archived-task.model";

export interface Group{
    groupId?: number,
    name: string,
    project: string,
    description: string,
    archivedTasks: ArchivedTask[]
}
