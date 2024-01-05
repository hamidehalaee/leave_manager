module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'myuser',
    password: 'mypassword',
    database: 'mydatabase',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrationsTableName: 'migration_table',
    migrations: ['dist/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };
  