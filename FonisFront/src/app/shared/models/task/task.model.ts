export interface Task{
    taskId?: number,
    name: string,
    description: string,
    responsiblePerson: string,
    teamId: number,
    team:{
        teamId: number,
        name: string
    },
    backlogPosition: number,
    boardPosition: number,
    deleted: boolean
}
