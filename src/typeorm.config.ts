import { TypeOrmModuleOptions } from "@nestjs/typeorm";

import { Department } from "./department/department.entity";
import { Employee } from "./employee/employee.entity";

export const TypeOrmConfig: TypeOrmModuleOptions = {
	type: "postgres",
	host: "127.0.0.1",
	port: 5432,
	username: "postgres",
	password: "admin",
	database: "company-db",
	synchronize: true,
	entities: [Department, Employee],
	migrations: ["./src/migrations/*.ts"]
};