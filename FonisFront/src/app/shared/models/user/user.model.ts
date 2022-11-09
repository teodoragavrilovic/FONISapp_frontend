export interface User{
    userId?: number
    admin: boolean,
    username: string,
    password?: string,
    name: string,
    newPass: boolean,
    positionId: number,
    position: {
        positionId: number,
        name: string
    }
}
