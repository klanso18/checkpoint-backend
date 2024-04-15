import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "./check_point_2",
  synchronize: true,
  entities: ["src/entities/*.ts"],
  logging: ["query", "error"],
});
