import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

export const entityName = 'courses'
export const userCoursesJoinTableName = 'usersCourses'

@Entity(entityName)
export class Course{
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", {length: 30})
    name: string

    @Column()
    created_at: Date

    @Column() // Nao preciso passar nenhum paramerto pois identifica automaticamente
    update_at: Date

    // Relationships

    @ManyToMany(() => User, (user) => user.courses)
    @JoinTable({ name: userCoursesJoinTableName })
    users: User[]
}