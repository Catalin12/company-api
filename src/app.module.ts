import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./typeorm.config";

import { EmployeeModule } from "./employee/employee.module";
import { DepartmentModule } from "./department/department.module";

@Module({
	imports: [
		TypeOrmModule.forRoot(TypeOrmConfig),
		EmployeeModule,
		DepartmentModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
