import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertResult, Repository } from "typeorm";
import { EmployeeDTO } from "./employee.dto";

import { Employee } from "./employee.entity";
import { EmployeeMapper } from "./employee.mapper";


@Injectable()
export class EmployeeService {
	public constructor(
		@InjectRepository(Employee)
		private employeeRepo: Repository<Employee>,
		private employeeMapper: EmployeeMapper
	) { }

	public async getAllEmployee(): Promise<EmployeeDTO[]> {
		const employee: Employee[] = await this.employeeRepo.find();
		return this.employeeMapper.toDTOs(employee);
	}

	public async getEmployeeById(idEmployer: number): Promise<EmployeeDTO> {
		const employer: Employee = await this.employeeRepo.findOne({ where: { id: idEmployer } });
		return this.employeeMapper.toDTO(employer);
	}

	public async getEmployeeBetween(minIdEmployer: number, maxIdEmployer: number): Promise<EmployeeDTO[]> {
		const employee: Employee[] = await this.employeeRepo
			.createQueryBuilder("employee")
			.where(`employee.id >= ${minIdEmployer}`)
			.limit(maxIdEmployer - minIdEmployer)
			.getMany();
		return this.employeeMapper.toDTOs(employee);
	}

	public async addEmployee(): Promise<InsertResult> {
		const employee: EmployeeDTO[] = [];
		for (let i = 0; i < 100; i++) {
			employee.push({
				idDepartment: Math.floor(Math.random() * (15 - 1 + 1) + 1),
				firstName: this.generateRandomName(10),
				lastName: this.generateRandomName(10),
				CNP: this.generateRandomCNP(13),
				jobFunction: this.generateRandomName(3),
				salary: Math.floor(Math.random() * (20000 - 3000 + 1) + 3000),
				daysOff: Math.floor(Math.random() * (22 - 1 + 1) + 1)
			});
		}
		return this.employeeRepo.insert(employee);
	}

	public async getTotalEmployee(): Promise<number> {
		return await this.employeeRepo.query("SELECT Count(id) FROM employee");
	}

	public async getAvgSalary(): Promise<number> {
		return await this.employeeRepo.query("SELECT AVG(salary) AS averageSalary FROM employee;");
	}

	private generateRandomName(length: number): string {
		let result = "";
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	private generateRandomCNP(length: number): string {
		let result = "";
		const characters = "0123456789";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
}