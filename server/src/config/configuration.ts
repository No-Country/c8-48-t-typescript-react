export default () => ({
  PORT: Number(process.env.BACKEND_PORT),
  jwtSecret: process.env.JWT_SECRET,
  jwtExpires: process.env.JWT_EXPIRES,
  AWS: {
    region: process.env.AWS_REGION,
    bucketName: process.env.AWS_S3_BUCKET_NAME,
  },
  database: {
    host: process.env.POSTGRES_DB_HOST,
    port: Number(process.env.POSTGRES_USER),
    name: `${process.env.POSTGRES_DB_PREFIX}_${process.env.POSTGRES_DB_NAME}`,
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
