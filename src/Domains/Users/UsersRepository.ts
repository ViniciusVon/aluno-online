import { IUser } from './types'

export class UserRepository {
    async getUsers() {
        const db: IUser[] = [
            {
                name: "user_1",
                email: "teste",
                password: "123"
            },
            {
                name: "user_2",
                email: "teste2",
                password: "321"
            }
        ]

        return db
    }
}