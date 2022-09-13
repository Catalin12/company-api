import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { InsertResult } from "typeorm";
import { DepartmentDTO } from "./department.dto";
import { DepartmentService } from "./department.service";


@Controller("department")
export class DepartmentController {
	public constructor(
		private departmentService: DepartmentService
	) { }

	@Post()
	public addTask(@Body() departmentDTO: DepartmentDTO): Promise<InsertResult> {
		return this.departmentService.addDepartment(departmentDTO);
	}

	@Get()
	public getAllDepartment(): Promise<DepartmentDTO[]> {
		return this.departmentService.getAllDepartments();
	}

	@Get(":id")
	public getEmployeeById(@Param("id") departmentId: number): Promise<DepartmentDTO> {
		return this.departmentService.getDepartmentById(departmentId);
	}
}