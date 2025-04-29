// Prompt Used: Generate a TypeORM configuration for connecting to PostgreSQL in a Node.js project using TypeScript

const ormconfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'copilotdb',
    synchronize: true,
    logging: false,
    entities: ['src/entity/**/*.ts'],
  };
  
  export default ormconfig;
  