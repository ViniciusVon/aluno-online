import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { entityName, userCoursesJoinTableName } from "../entity/Course";
import { entityName as entityJoinedName} from '../entity/User'

const tableName = entityName
const joinTableName = userCoursesJoinTableName
const joinedTable = entityJoinedName

export class CreateCoursesTable1715965829376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: tableName,
                columns: [
                    {
                        name: 'id',
                        type: "serial",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar(30)",
                        isNullable: false
                      },
                      {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                      },
                      {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                      }
                ]
            })
        )
        await queryRunner.createTable(
            new Table({
                name: joinTableName,
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true
                      },
                      {
                        name: "course_id",
                        type: "int",
                        isNullable: false
                      },
                      {
                        name: "user_id",
                        type: "int",
                        isNullable: false
                      }
                ],
                foreignKeys: [
                    {
                        columnNames: ['course_id'],
                        referencedTableName: tableName,
                        referencedColumnNames: ['id'],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ['user_id'],
                        referencedTableName: joinedTable,
                        referencedColumnNames: ['id'],
                        onDelete: "CASCADE"
                    }
                ]
            })
        )
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(joinTableName, true)
        await queryRunner.dropTable(tableName, true)
    }

}
