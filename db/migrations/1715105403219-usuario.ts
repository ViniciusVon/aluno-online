import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TABLE_NAME = "users"

export class Usuario1715105403219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },{
                        name: "subscription",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "surname",
                        type: "varchar"
                    }, 
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "birthday",
                        type: "timestamp"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(TABLE_NAME)
    }

}
