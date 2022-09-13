import { Controller, Get, Param, Post } from "@nestjs/common";
import { InsertResult } from "typeorm";
import { EmployeeDTO } from "./employee.dto";
import { EmployeeService } from "./employee.service";

@Controller("employee")
export class EmployeeController {
	public constructor(
		private employeeService: EmployeeService
	) { }

	@Get(":all")
	public getAllEmployee(): Promise<EmployeeDTO[]> {
		return this.employeeService.getAllEmployee();
	}

	@Get(":id")
	public getEmployeeById(@Param("id") employeeId: number): Promise<EmployeeDTO> {
		return this.employeeService.getEmployeeById(employeeId);
	}

	@Get(":pagination/:minId/:maxId")
	public getEmplyeeBetweenId(@Param("minId") minId: number, @Param("maxId") maxId: number): Promise<EmployeeDTO[]> {
		return this.employeeService.getEmployeeBetween(minId, maxId);
	}

	@Post(":count")
	public getTotalEmployee(): Promise<number> {
		return this.employeeService.getTotalEmployee();
	}

	@Post("random")
	public addEmployee(): Promise<InsertResult> {
		return this.employeeService.addEmployee();
	}

	@Get(":avgsalary")
	public getAvgSalary(): Promise<number> {
		return this.employeeService.getAvgSalary();
	}
}