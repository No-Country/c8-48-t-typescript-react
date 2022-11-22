export default () => ({
  PORT: Number(process.env.BACKEND_PORT),
  database: {
    host: process.env.POSTGRES_DB_HOST,
    port: Number(process.env.POSTGRES_DB_PORT),
    name: process.env.POSTGRES_DB_NAME,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    autoLoadEntities: process.env.NODE_ENV === 'dev',
    synchronize: process.env.NODE_ENV === 'dev',
  },
});
export interface iConfigEnv {
  PORT: number;
  database: {
    host: string;
    port: number;
    name: string;
    username: string;
    password: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
  };
}
