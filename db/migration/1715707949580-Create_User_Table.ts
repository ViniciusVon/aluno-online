const { QueryRunner, Table } = require("typeorm");

const entityName = 'users'

module.exports = class CreateUserTable1715707949580 {

    async up(queryRunner) { /*Comandos para criar*/
        await queryRunner.createTable(
            new Table({
                name: entityName,
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar(30)',
                        isNullable: false
                    },
                    {
                        name: 'surname',
                        type: 'varchar(60)',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar(60)',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'birthday',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'subscription',
                        type: 'varchar(12)',
                        isNullable: true
                    }
                ]
            })
        )
    }

    async down(queryRunner) { /*Comandos para destruir o que criamos*/
        await queryRunner.dropTable(entityName)
    }

}
