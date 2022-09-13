import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeController } from "./employee.controller";
import { Employee } from "./employee.entity";
import { EmployeeMapper } from "./employee.mapper";
import { EmployeeService } from "./employee.service";

@Module({
	imports: [TypeOrmModule.forFeature([Employee])],
	controllers: [EmployeeController],
	providers: [EmployeeService, EmployeeMapper],
	exports: [EmployeeService, EmployeeMapper]
})
export class EmployeeModule { }