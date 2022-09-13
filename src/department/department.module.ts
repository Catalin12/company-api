import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartmentController } from "./department.controller";

import { Department } from "./department.entity";
import { DepartmentMapper } from "./department.mapper";
import { DepartmentService } from "./department.service";


@Module({
	imports: [TypeOrmModule.forFeature([Department])],
	controllers: [DepartmentController],
	providers: [DepartmentService, DepartmentMapper],
	exports: [DepartmentService, DepartmentMapper]
})
export class DepartmentModule { }